import { useState } from 'react'
import './App.css'

import ExpCard from './components/Card'
import Form from './components/Form'
import Filter from './components/Filter'

function App() {
	let [experiments, setExperiments] = useState([
        { 
            id: 1, 
            name: "Электролизка", 
            discrpt: "Провести электролиз водички",
			status: "В процессе ⌛"
        },
		{ 
            id: 2, 
            name: "Окисление", 
            discrpt: "Провести оксиление",
			status: "Завершён ✅"
        }
    ]);

	const addNewExperiment = (newExperiment) => {
		const ExpWithId = { ...newExperiment, id: Date.now() };
		setExperiments([...experiments, ExpWithId]);
	};

	return (<div className="my-app">

		<div>
			<div className="form">
				<Form onAddExperiments={addNewExperiment} />
			</div>
			<div className="filter">
				<Filter />
			</div>
		</div>

		<div className='experiments'>
			{experiments.map((experiment) => (
				<ExpCard 
					key={experiment.id}
					name={experiment.name} 
					discrpt={experiment.discrpt} 
					status={experiment.status} 
				/>
			))}
		</div>

</div>)
}

export default App
