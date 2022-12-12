import { useEffect } from 'react';
import { useState } from 'react';
import { apiUrl } from '../../api';

import './style.scss';

export function Task(props) {
  const [editMode, setEditMode] = useState(false);
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    setTaskName(props.task.description);
  }, []);

  function deleteTask() {
    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('authToken'),
    };

    const requestConfig = {
      method: 'DELETE',
      headers: requestHeaders,
    };

    fetch(`${apiUrl}/tasks/${props.task.id}`, requestConfig).then(
      (response) => {
        if (response.ok) {
          props.onDeleteTask(props.task.id);
        } else {
          alert('A requisição de Delete, deu erro');
        }
      }
    );
  }

  function updateTask(event) {
    event.preventDefault();

    const requestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('authToken'),
    };

    const requestBody = JSON.stringify({
      description: taskName,
    });

    const requestConfig = {
      method: 'PUT',
      headers: requestHeaders,
      body: requestBody,
    };

    fetch(`${apiUrl}/tasks/${props.task.id}`, requestConfig).then(
      (response) => {
        if (response.ok) {
          setEditMode(false);

          response.json().then((data) => {
            props.onUpdateTask(data);
          });
        } else {
          alert('A requisição de Edit, deu erro');
        }
      }
    );
  }

  return (
    <div className='task-component'>
      <h1>{props.task.description}</h1>
      <p>Status: {props.task.completed ? 'Finalizada' : 'Em andamento'}</p>

      {editMode ? (
        <form onSubmit={(event) => updateTask(event)}>
          <div>
            <label htmlFor=''>Nome</label>
            <input
              type='text'
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
            />
          </div>

          <button className='finish' onClick={updateTask}>
            Atualizar
          </button>
        </form>
      ) : null}

      <div className='buttons'>
        <button className='edit' onClick={() => setEditMode(!editMode)}>
          Editar
        </button>
        <button className='delete' onClick={deleteTask}>
          Deletar
        </button>
        <button className='finish' onClick={deleteTask}>
          Concluir
        </button>
      </div>
    </div>
  );
}
