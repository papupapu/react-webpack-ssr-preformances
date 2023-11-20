import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '../../../UI/Grid';
import GridItem from '../../../UI/GridItem';

const Posts = () => {
  const posts = useSelector(state => state.posts);
  
  return (
    <Grid direction="column">
      {posts.map((post) => (
        <GridItem behavior="fixed">
          <p>{post.title}</p>
          <p>{post.content}</p>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Posts;
