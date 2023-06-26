import { FC } from 'react';
import Header from 'components/Header';
import Protected from 'hoc/Protected';

const App: FC = () => (
	<div className='h-full flex flex-col'>
		<Header />
		<Protected />
	</div>
);

export default App;
