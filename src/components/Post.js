import React from 'react';
class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: {},
            url: "https://www.reddit.com" + this.props.postData.permalink + ".json",
            post: this.props.postData
        }
    }

    componentDidMount(){
        fetch(this.state.url) // Call the fetch function passing the url of the API as a parameter
        .then(resp => resp.json()) // Transform the data into json
        .then(data => {
            this.setState({comments: data[1].data.children});
        });
    }
    
    commentsCheck() {
        let postComments = this.state.comments;
        let checkedForComments;
        if(postComments.length > 0){
            checkedForComments = Array.isArray(postComments) && postComments.map((comment) => {
                return (
                    <li key={comment.data.id}>{comment.data.body}</li>
                )    
            })
        } else {
             return (
                <li className="no-comments"></li>
            )  
        }
        return checkedForComments;
    }

    render() {

        let post = this.state.post;
        

        return (
            <div className="reddit-post">
                
                <h3>Title: {post.title}</h3>
                <p>Body: {post.selftext}</p>
     
                <div className="comment-section">
                    <h5>Comments below</h5>
                    <hr/>
                    <ul>{this.commentsCheck()}</ul>
                </div>
            </div>
        )
    }


}

export default Post;
