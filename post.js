import './Posts.css'
import Post from './post/Post'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)

    return (//posts suggestion on mindfullness
        !posts.length ? <CircularProgress /> : (
            <div className='container'>
                {posts.map((post) => (
                    <div class="col-sm-6">
                        <div style={{ padding: '10px' }} key={post._id}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </div>
                    </div>
                ))}
            </div>
        )
    )
}

export default Posts