import { useContext, useState } from "react"
import { Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import BooksContext from "../utils/BooksContext"
import ModalItem from "./Modal"

function BookCard(props) {
  const { book, inProfile } = props
  const [show, setShow] = useState(false)
  const { deleteBook } = useContext(BooksContext)
  const handleClose = () => {
    setShow(false)
  }

  const handleOpen = () => {
    setShow(true)
  }
  return (
    <>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              {book.owner.firstName} {book.owner.lastName}
            </Card.Title>
            <Card.Img variant="top" src={book.avatar} />
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.description}</Card.Text>
            {inProfile ? (
              <>
                <Button variant="success" className="me-2" onClick={handleOpen}>
                  Edit
                </Button>
                <Button variant="danger" onClick={deleteBook} id={book._id}>
                  Delete
                </Button>
              </>
            ) : (
              <Link className="btn btn-primary" to={`/book/${book._id}`}>
                View
              </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
      <ModalItem show={show} handleClose={handleClose} book={book} />
    </>
  )
}

export default BookCard
