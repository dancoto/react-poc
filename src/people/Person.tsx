import * as React from 'react';
import { Person } from './person.model';

// Create the containers interface
interface Props {
  person: Person;
}

export class PersonComponent extends React.Component<Props> {
  public render() {
    const { person } = this.props;
    return <li className="name">{person.name}</li>;
  }
}
