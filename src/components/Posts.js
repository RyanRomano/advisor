import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.url,
            redditPosts: {}
        };

    }

    componentDidMount(){
        fetch(this.state.url) // Call the fetch function passing the url of the API as a parameter
        .then(resp => resp.json()) // Transform the data into json
        .then(data => {
            this.setState({redditPosts: data.data.children});
        });
    }
    

    render() {
        return (
            <ul>{
                Array.isArray(this.state.redditPosts) && this.state.redditPosts.map((post) => {
                    return (
                        <Post key={post.data.id} postData={post.data} />
                    )
                })
            }</ul>
        )
    }
}

export default Posts;
