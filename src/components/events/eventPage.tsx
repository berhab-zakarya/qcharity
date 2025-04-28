import { useState } from 'react';
import { Modal, Button, Form, Toast, ToastContainer } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const EventPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, title, description, date, location: eventLocation } = location.state;

  
  const [comments, setComments] = useState([
    {
      id: 1,
      username: "Sarah Ahmed",
      avatar: "/commetns/p4.jpg",
      comment: "This initiative is truly inspiring. I'm glad to see such meaningful work being done.",
      date: "2025-04-20"
    },
    {
      id: 2,
      username: "Mohammed Ali",
      avatar: "/commetns/p3.jpg",
      comment: "Great work! Looking forward to participating in future events.",
      date: "2025-04-19"
    },
    {
      id: 3,
      username: "Fatima Hassan",
      avatar: "/commetns/p5.jpg",
      comment: "The impact of these projects is remarkable. Keep up the excellent work!",
      date: "2025-04-18"
    },
    {
      id: 4,
      username: "Ahmad Khan",
      avatar: "/commetns/p6.png",
      comment: "Thank you for organizing such meaningful events. This makes a real difference.",
      date: "2025-04-17"
    },
    {
      id: 5,
      username: "Layla Benali",
      avatar: "/commetns/p9.png",
      comment: "I appreciate the transparency and dedication of the organizers. Well done!",
      date: "2025-04-16"
    },
    {
      id: 6,
      username: "Omar Youssef",
      avatar: "/commetns/p7.png",
      comment: "Such events bring hope to our communities. Thank you for your efforts.",
      date: "2025-04-15"
    }
  ]);

  // Modal and form state
  const [showModal, setShowModal] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    setComments([
      {
        id: comments.length + 1,
        username: newUsername || "Anonymous",
        avatar: "/commetns/p3.jpg", // يمكنك جعلها ديناميكية لاحقاً
        comment: newComment,
        date: new Date().toISOString().slice(0, 10)
      },
      ...comments
    ]);
    setShowModal(false);
    setShowToast(true);
    setNewComment("");
    setNewUsername("");
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row vh-100">
          {/* Left half - Image */}
          <div className="col-6 px-0">
            <div
              className="h-100"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>

          {/* Right half - Content */}
          <div className="col-6 d-flex align-items-start bg-white px-5">
            <div className="py-5" style={{ maxWidth: '600px' }}>
              {/* Back Button */}
              <button
                onClick={() => navigate(-1)}
                className="btn btn-link text-decoration-none mb-5 p-0 d-flex align-items-center gap-2 text-secondary"
              >
                <i className="bi bi-arrow-left"></i>
                Back to Events
              </button>

              {/* Meta information */}
              <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-medium">
                  {eventLocation}
                </span>
                <span className="text-secondary" style={{ fontSize: '0.95rem' }}>
                  <i className="bi bi-calendar3 me-2"></i>
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              {/* Title */}
              <h1 className="display-4 fw-bold lh-sm mb-4" style={{
                color: '#1a1a1a',
                fontSize: 'calc(1.8rem + 1.5vw)'
              }}>
                {title}
              </h1>

              {/* Separator */}
              <div className="separator my-4" style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(to right, #3498DB, #2980B9)',
                borderRadius: '4px'
              }} />

              {/* Description */}
              <div className="content-wrapper mt-5">
                <p className="text-gray-700" style={{
                  color: '#4a4a4a',
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                  maxWidth: '95%'
                }}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Comments Section after the main content */}
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold mb-0">Comments</h3>
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Add Comment
              </Button>
            </div>
            <div className="comments-section">
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item d-flex gap-3 mb-4 p-3 border rounded">
                  <div className="comment-avatar">
                    <img
                      src={comment.avatar}
                      alt={comment.username}
                      className="rounded-circle"
                      style={{
                        width: '48px',
                        height: '48px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className="comment-content flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h6 className="mb-0 fw-bold">{comment.username}</h6>
                      <small className="text-muted">
                        {new Date(comment.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </small>
                    </div>
                    <p className="mb-0 text-gray-700">{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for adding comment */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add a Comment</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddComment}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your comment here..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={!newComment.trim()}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Toast for comment added */}
      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="success" delay={4000} autohide>
          <Toast.Header>
            <strong className="me-auto">Comment Added</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Your comment has been added successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default EventPage;