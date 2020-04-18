////////////////////////////////////////////////////////////////////////////////// Instructions
////////////////////////////////////////////////////////////////////////////////
function Instructions(props) {

  const titleInstructions = (
    <h2 className="consignes__title">Consignes</h2> 
  );

  const listInstructions = (
    <ul className="consignes__list">
      {props.instructions.map(instruction => (
        <li key={instruction.id}>{instruction.content}</li>
      ))}
    </ul>
  );

  return (
    <div className="consignes__content">
      {titleInstructions}
      {listInstructions}
    </div>
  );
}

const instructions = [
  {
    id: 1,
    content: 'Sélectionner un ratio.'
  },
  {
    id: 2,
    content: 'Renseigner la largeur (width) afin d\'obtenir la hauteur (height).'
  },
  {
    id: 3,
    content: 'Attention: ni lettres ni nombres à virgule.'
  }
]

function Down() {
  return <span class="icon-arrow-down2"></span>
}

function Up() {
  return <span class="icon-arrow-up2"></span>
}

class ToggleInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div
          className={
            this.state.isToggleOn
              ? "consignes"
              : "consignes is-down"
          }
        >
          <Instructions instructions={instructions} />
          <button  
            type="button" 
            class="btn btn-consignes" 
            onClick={this.handleClick}>
          {this.state.isToggleOn ? (
              <Down />
          ) : (
              <Up />
          )}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <ToggleInstructions />, 
  document.getElementById('instructions')
);

////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////