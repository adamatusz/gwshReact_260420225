/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import "./App.css";

// ################## zadanie 1

/* 
const App = () => {


  
	return (
		<div className='App'>
			<h1>Hello World</h1>
			<div className='card'>
				<button onClick={() => alert("Hello World!")}>Click me</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
                  </div>
              </div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
};
 */

// ################## zadanie 2

/* import { useState, useEffect } from "react";

const App = () => {
	const [time, setTime] = useState(0); // Przechowuje czas w sekundach
	const [isRunning, setIsRunning] = useState(false); // Czy stoper działa

	useEffect(() => {
		let interval: number | null = null;

		if (isRunning) {
			interval = setInterval(() => {
				setTime(prevTime => prevTime + 1);
			}, 1000);
		} else if (!isRunning && interval) {
			clearInterval(interval);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [isRunning]);

	const handleStart = () => setIsRunning(true);
	const handleStop = () => setIsRunning(false);
	const handleReset = () => {
		setIsRunning(false);
		setTime(0);
	};

	return (
		<div className='App'>
			<h1>Stoper</h1>
			<div className='card'>
				<h2>{time} s</h2>
				<div>
					<button onClick={handleStart} className='button-exercise2'>
						Start
					</button>
					<button onClick={handleStop} className='button-exercise2'>
						Stop
					</button>
					<button onClick={handleReset} className='button-exercise2'>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
 */

// ################## zadanie 3

import { useState } from "react";
// import "./App.css";

const App = () => {
	const [tasks, setTasks] = useState<
		{ id: number; text: string; completed: boolean }[]
	>([]); // Lista zadań
	const [taskInput, setTaskInput] = useState(""); // Wartość inputa dla nowego zadania

	const handleAddTask = () => {
		if (taskInput.trim() === "") return;
		setTasks(prevTasks => [
			...prevTasks,
			{ id: Date.now(), text: taskInput, completed: false },
		]);
		setTaskInput("");
	};

	const handleCompleteTask = (id: number) => {
		setTasks(prevTasks =>
			prevTasks.map(task =>
				task.id === id ? { ...task, completed: true } : task
			)
		);
	};

	const handleDeleteTask = (id: number) => {
		setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
	};

	const activeTasksCount = tasks.filter(task => !task.completed).length;
	const completedTasksCount = tasks.filter(task => task.completed).length;

	return (
		<div className='App'>
			<h1>Zarządzanie Zadaniami</h1>
			<div className='task-manager'>
				<input
					type='text'
					value={taskInput}
					onChange={e => setTaskInput(e.target.value)}
					placeholder='Dodaj nowe zadanie'
				/>
				<button onClick={handleAddTask}>Dodaj Zadanie</button>
				<h2>Aktywne Zadania ({activeTasksCount})</h2>
				<ul>
					{tasks
						.filter(task => !task.completed)
						.map(task => (
							<li key={task.id}>
								{task.text}
								<button onClick={() => handleCompleteTask(task.id)}>
									Wykonane
								</button>
								<button onClick={() => handleDeleteTask(task.id)}>Usuń</button>
							</li>
						))}
				</ul>
				<h2>Wykonane Zadania ({completedTasksCount})</h2>
				<ul>
					{tasks
						.filter(task => task.completed)
						.map(task => (
							<li key={task.id}>
								{task.text}
								<button onClick={() => handleDeleteTask(task.id)}>Usuń</button>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default App;
