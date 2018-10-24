import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component{

    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }


    createTasks(item){
        return <li key={item.key}>{item.text} {<i class="material-icons" onClick={() => this.delete(item.key)}>delete</i>}</li>
    }

    delete(key){
        console.log('key is:' + key);
        this.props.delete(key);
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className = 'theList'>
                <FlipMove duration={150} easing='ease-out'>
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;