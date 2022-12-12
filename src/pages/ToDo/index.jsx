import { useEffect, useState } from 'react';
import { Task } from '../../components/Task';
import { apiUrl } from '../../api';
import './style.scss';
import { useLanguage } from '../../hooks/useLanguage';
import { contents } from '../../assets/translate/contents';

export function ToDo() {
  const [authToken, setAuthToken] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskNameError, setTaskNameError] = useState(false);

  const { currentLanguage } = useLanguage();

  // useEffect de Auth
  useEffect(() => {
    const userData = {
      email: 'usertesteaulateste@mail.com',
      password: '1234',
    };

    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(userData),
    };

    fetch(`${apiUrl}/users/login`, requestConfig).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          localStorage.setItem('authToken', data.jwt);
          setAuthToken(data.jwt);
        });
      } else {
        alert('senha errada');
      }
    });
  }, []);

  // useEffect de Get de Tasks
  useEffect(() => {
    if (authToken !== '') {
      const requestHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      };

      const requestConfig = {
        headers: requestHeaders,
      };

      fetch(`${apiUrl}/tasks`, requestConfig).then((response) => {
        response.json().then((data) => setTasks(data));
      });
    }
  }, [authToken]);

  // useEffect para validar o Formulário
  useEffect(() => {
    if (taskName.length > 4) {
      setTaskNameError(false);
    } else {
      setTaskNameError(true);
    }
  }, [taskName]);

  function createTask(event) {
    event.preventDefault();

    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authToken,
    };

    const requestBody = JSON.stringify({
      description: taskName,
      completed: false,
    });

    const requestConfig = {
      method: 'POST',
      headers: requestHeaders,
      body: requestBody,
    };

    fetch(`${apiUrl}/tasks`, requestConfig).then((response) => {
      response.json().then((data) => {
        setTasks([...tasks, data]);
      });
    });
  }

  function deleteTaskFromList(id) {
    setTasks(
      tasks.filter((task) => {
        if (task.id !== id) {
          return task;
        }
      })
    );
  }

  function updateTaskFromList(taskUpdated) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskUpdated.id) {
          return taskUpdated;
        }

        return task;
      })
    );
  }

  return (
    <div className='to-do-component'>
      <form
        className={taskNameError ? 'form-error' : ''}
        onSubmit={(event) => createTask(event)}
      >
        <h1>{contents.toDoComponent.form.title[currentLanguage]}</h1>

        <div className='form-controller'>
          <label htmlFor=''>
            {contents.toDoComponent.form.inputName.label[currentLanguage]}
          </label>
          <input
            type='text'
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
          />
          <small>
            {contents.toDoComponent.form.inputName.error[currentLanguage]}
          </small>
        </div>

        <button disabled={taskNameError}>
          {contents.toDoComponent.form.buttoName[currentLanguage]}
        </button>
      </form>

      <main>
        <h1>Tarefas criadas</h1>

        <section className='itens'>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={(id) => deleteTaskFromList(id)}
              onUpdateTask={(task) => updateTaskFromList(task)}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
