import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./Post";
import postData from "./postData.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
export default function Body() {
  let postList = [];
  const [cate, setCat] = React.useState(0);

  {
    cate === 0
      ? (postList = postData.map((posts) => (
          <Card key={posts.id}>
            <Card.Body className="content mx-auto">
              <Post
                head={posts.head}
                body={posts.body}
                id={posts.id}
                category={posts.category}
              />
            </Card.Body>
          </Card>
        )))
      : (postList = postData.map(
          (posts) =>
            cate === posts.cat && (
              <Card key={posts.id}>
                <Card.Body className="content mx-auto">
                  <Post
                    head={posts.head}
                    body={posts.body}
                    id={posts.id}
                    category={posts.category}
                  />
                </Card.Body>
              </Card>
            )
        ));
  }

  return (
    <div className="text-center">
      Show by Category:
      <Button size="lg" variant="outline-primary" onClick={() => setCat(1)}>
        Art
      </Button>
      <Button size="lg" variant="outline-secondary" onClick={() => setCat(2)}>
        Books
      </Button>
      <Button size="lg" variant="outline-success" onClick={() => setCat(3)}>
        Games
      </Button>
      <Button size="lg" variant="outline-warning" onClick={() => setCat(0)}>
        All
      </Button>
      {postList}
    </div>
  );
}
