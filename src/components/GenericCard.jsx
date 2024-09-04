import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function gCard({title, text, image, background}) {
  return (
    <Card style={{ width: '20rem', backgroundColor: "#0b102e"}}>
      <Card.Img 
      variant="top" 
      src={image}
      style={{ width: '300px', height: '200px' }}
      />
      <Card.Body>
        <Card.Title><b>{title}</b></Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Find out more!</Button>
      </Card.Body>
    </Card>
  );
}

export default gCard;
