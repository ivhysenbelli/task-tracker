import {useState} from "react";



function AddTask({onAdd}) {

    const [text,setText] = useState('');
    const [date,setDate] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!text){
            alert('Please add a task');
            return;
        }
        else{
            onAdd({text, date, reminder})
            setText('');
            setDate('');
            setReminder(false);
        }
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Add day and time" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} value={text} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" className="btn btn-block" value="Save Task"/>
        </form>
    )
}

export default AddTask
