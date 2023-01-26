import React from 'react'


function App() {
    const title = 'My App';
    const body = 'This is my app';
    const comments = [
        {id: 1, text: 'comment 1'},
        {id: 2, text: 'comment 2'},
        {id: 3, text: 'comment 3'}
    ];

    const showComments = true;

    return (
        <div className='container'>
            <h1>{ title }</h1>
            <p>{ body }</p>

            There are comments ? { showComments ? 'yes' : 'no' }

            <div className='comments'>
                <h3>Comments - Total: ({ comments.length })</h3>
                <ul>
                    { comments.map( (comment, index) => (
                        <li key={index}>
                            {comment.text}
                        </li>    
                    ) ) }
                </ul>
            </div>
        </div>
    )
}

// Criação dos componentes via React, que não é recomendado
// function App() {
//     return React.createElement('div', { className: 'container' }, React.createElement('h1', {  }, 'My App'))
// }

export default App