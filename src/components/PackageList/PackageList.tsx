import React, {FC, useState} from 'react';

// utils
import {getPackageList} from '../../API';
import {clearData} from './data';

// styles
import {Container, Content, PaginationContainer, Title, Toolbar, Total} from './styles';

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
			.then(result => {
				const data = clearData(result?.data.objects) || [];
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
		if (page === 'prev') {
			const from = state.from > 10 ? state.from - 10 : state.from;
			setState((prevState) => ({...prevState, loading: true, from}));
		}
		setState((prevState) => ({...prevState, loading: true, from: state.from + 10}));
		packageListQuery(state.text, state.from + 10);
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
				{state.loading ? <Loading /> : <Table data={state.data} />}
			</Content>

			{state.data.length ? (
				<PaginationContainer>
					<Button iconOnly type="button" icon="prev" variant="rounded" disabled={state.from <= 10} onClick={() => paginationHandle('prev')} />
					<Total>{state.total}</Total>
					<Button iconOnly type="button" icon="next" variant="rounded" onClick={() => paginationHandle('next')} />
				</PaginationContainer>
			): null}
		</Container>
	);
};

export default PackageList;
