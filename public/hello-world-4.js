const nameMaker = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

console.log(nameMaker("Deanna", "Veale"));

window.onload = function()
{
    alert("Window onload has occurred.");
    class Greetings extends React.Component
    {
        render()
        {
            return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
        }
    }
    ReactDOM.render(
        React.createElement(Greetings, { name : 'Daniel' }),
        document.getElementById('root')
    );
};
alert('function created.')