function ClickEvents() {
    
    const handleClick = () => {
        alert("Life is Good!");
    };
    
    return (
        <div>
            <h2>Click Events</h2>
            <button onClick={handleClick} className="btn btn-primary">
                Click Me
            </button>
        </div>
    );
}
export default ClickEvents;
