import * as React from 'react';
import { Starship } from './starship.model';

// Create the containers interface
interface Props {
  starship: Starship;
}

export class StarshipComponent extends React.Component<Props> {
  public render() {
    const { starship } = this.props;
    return <li className="name">{starship.name}</li>;
  }
}
