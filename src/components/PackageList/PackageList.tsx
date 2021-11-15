import React, {FC, useState} from 'react';

// utils
import {getPackageList} from '../../API';
import {clearData} from './data';

// styles
import {Container, Content, Title, Toolbar} from './styles';

// types
import {PackageListProps} from './types';

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

	const clickHandle = () => {
		const {text, from} = state;
		setState((prevState) => ({...prevState, loading: true, from: from + 10}));
		getPackageList(text, 10, from)
			.then(r => {
				const data = clearData(r?.data.objects) || [];
				setState((prevState) => ({
					...prevState,
					loading: false,
					total: r?.data.total,
					data,
				}));
			});
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
		</Container>
	);
};

export default PackageList;
