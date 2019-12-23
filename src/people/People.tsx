import * as React from 'react';
import { connect } from 'react-redux';
import { getPeople } from './actions';
import { PersonComponent } from './Person';
import { Person } from './person.model';
// Create the containers interface
interface Props {
  people: Person[];
  dispatch: React.Dispatch<any>;
}

class PeopleComponent extends React.Component<Props> {
  public render() {
    const { people } = this.props;
    return (
      <div className="name-container">
        <ul>
          {people &&
            people.map(person => {
              return <PersonComponent key={person.name} person={person} />;
            })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getPeople());
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: any) => {
  return {
    people: store.people.people,
  };
};

export default connect(mapStateToProps)(PeopleComponent);
