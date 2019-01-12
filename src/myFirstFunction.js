const nameMaker = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}

console.log(nameMaker("Daniel P.", "Shaefer"));

window.onload = function()
{
    alert("Window onload has occurred.");
    class Greetings extends React.Component
    {
        render()
        {
            //return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
            return <h1>Greetings {this.props.name}!</h1>
        }
    }
    ReactDOM.render(
        React.createElement(Greetings, { name : 'Daniel' }),
        document.getElementById('root')
    );
};
alert('function created.')