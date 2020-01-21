import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderComments(comments) {
        if (comments.length > 0) {
            let comms = comments.map((comm, i) => {
                let date = new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comm.date)))

                return (
                    <ul key={comm.id} className="list-unstyled">
                        <li className="comment">{comm.comment}</li>
                        <li className="author">-- {comm.author}, {date}</li>
                    </ul>
                )
            });


            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div>{comms}</div>
                </div>

            );
        }
        else {
            return (
                <div></div>
            )
        }
    }
    renderDish(dish) {
        if (dish != null) {
            return (

                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>

            )
        }
        else {
            return <div></div>
        }
    }


    render() {
        let comments = [];
        if (this.props.dish != null) {
            comments = this.props.dish.comments;
        }
        return (
            <div className="container">


                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>

                    {this.renderComments(comments)}

                </div>
            </div>
        )


    }



}



export default DishDetail;