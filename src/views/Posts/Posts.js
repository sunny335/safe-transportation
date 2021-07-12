import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Layout from 'src/components/Layout/Layout';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const { post, isLoading = false } = useSelector((state) => state.posts);
  const [posts, setData] = useState([]);
  console.log(JSON.stringify('posts', posts));
  const classes = useStyles();
  if (!posts.length && !isLoading) return 'No posts';
  useEffect(() => {
    axios.get(`http://localhost:9000/api/getposts`).then((res) => {
      const persons = res;
      // thissetState({ persons });
      setData(persons.data.posts);
    });
  }, []);
  // console.log('axiiii', posts);
  return (
    <Layout>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <table className="w-100 p-5">
            <tr className="d-flex justify-content-between">
              <th>Created At</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
            {posts.map((post) => (
              <tr className="d-flex justify-content-between">
                <Post post={post} setCurrentId={setCurrentId} />
              </tr>
            ))}
          </table>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Posts;
