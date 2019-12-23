import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { getStarships } from './actions';
import { StarshipComponent } from './Starship';
import { Starship } from './starship.model';
// Create the containers interface
interface Props {
  starships: Starship[];
  dispatch: React.Dispatch<any>;
}

class StarshipsComponent extends React.Component<Props> {
  public render() {
    const { starships } = this.props;
    return (
      <div className="name-container">
        <ul>
          {starships &&
            starships.map(starship => {
              return (
                <StarshipComponent key={starship.name} starship={starship} />
              );
            })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(getStarships());
  }
}

// Grab the characters from the store and make them available on props
const mapStateToProps = (store: AppState) => {
  return {
    starships: store.starships.starships,
  };
};

export default connect(mapStateToProps)(StarshipsComponent);
