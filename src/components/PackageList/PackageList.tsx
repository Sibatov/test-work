import React, {FC, useState} from 'react';

// utils
import {getPackageList} from '../../API';
import {clearData} from './data';

// styles
import {Container, Content, Empty, PaginationContainer, Title, Toolbar, Total} from './styles';

// types
import {PackageListI, PackageListProps} from './types';

// components
import Table from '../Table';
import Button from '../Button';
import Loading from '../Loading';
import Input from '../Input';

const PackageList: FC<PackageListProps> = ({className}) => {
	const [state, setState] = useState({
		loading: false,
		from: 0,
		text: '',
		data: [] as any[],
		total: 0,
	});

	const packageListQuery: PackageListI = (text, from) => {
		getPackageList(text, 10, from)
			.then((result) => {
				const data = clearData(result.data.objects) || [];
				setState((prevState) => ({
					...prevState,
					loading: false,
					total: result?.data.total,
					data,
				}));
			});
	}

	const clickHandle = () => {
		setState((prevState) => ({...prevState, loading: true}));
		packageListQuery(state.text, 0);
	};

	const paginationHandle = (page: 'prev' | 'next') => {
		const from = page === 'prev' ? state.from - 10 : state.from + 10;
		setState((prevState) => ({...prevState, loading: true, from}));
		packageListQuery(state.text, from );
	};

	return (
		<Container className={className}>
			<Title>App for search npm packages</Title>

			<Toolbar>
				<Input
					placeholder="Enter a package name"
					onChange={(text) => setState((prev) => ({...prev, text}))}
				/>
				<Button
					type="button"
					variant="rounded"
					disabled={state.loading}
					onClick={clickHandle}
				>
					Search
				</Button>
			</Toolbar>

			<Content>
				{(!state.data.length && !state.loading) && <Empty>No packages to show</Empty>}
				{state.loading ? <Loading /> : <Table data={state.data} />}
			</Content>

			{state.data.length ? (
				<PaginationContainer>
					<Button
						iconOnly
						type="button"
						icon="prev"
						variant="rounded"
						disabled={state.from < 10}
						onClick={() => paginationHandle('prev')}
					/>
					<Total>{state.total}</Total>
					<Button
						iconOnly
						type="button"
						icon="next"
						variant="rounded"
						onClick={() => paginationHandle('next')}
					/>
				</PaginationContainer>
			): null}
		</Container>
	);
};

export default PackageList;
