import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';


export class MovieView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={movie.imageURL}/>
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Subtitle>Director: {movie.Director.Name}</Card.Subtitle>
          <br />
          <Card.Text>{movie.Description}</Card.Text>
          <Button onClick={() => { onBackClick(null); }}>Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};