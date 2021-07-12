import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { clearPost, likePost, deletePost } from 'src/actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);
  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);
  console.log('user', user);

  const openPost = () => {
    history.push(`/property/${post._id}`);
    dispatch(clearPost());
  };
  function truncate(string, n) {
    return string?.length > n ? `${string.substr(0, n - 1)} .....` : string;
  }
  return (
    <>
      <td>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </td>
      <td>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {truncate(post.message, 50)}
          </Typography>
        </CardContent>
      </td>
      <td>
        <CardActions className={classes.cardActions}>
          {/* <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={handleLike}
        >
          <Likes />
        </Button> */}
          {(user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <Button
              size="small"
              color="secondary"
              onClick={() => dispatch(deletePost(post?._id))}
            >
              <DeleteIcon fontSize="small" /> Delete
            </Button>
          )}
        </CardActions>
      </td>
    </>
  );
};

export default Post;
