import React from "react"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export default function Issue({
  issue: { id, title },
  onEditIssue,
  onPinTask,
}) {
  return (
    <Card id={id}>
      <Card.Body>
        <Card.Text>
            { title } 
            <Button variant="outline-secondary" size="sm" className="float-right"  ><FontAwesomeIcon icon={faEdit} /></Button>    
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
