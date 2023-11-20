import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addPost } from '../../../../common/store/posts';

import Grid from '../../../UI/Grid';
import GridItem from '../../../UI/GridItem';

const Posts = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const updateTitle = e => setTitle(e.target.value);
  const updateContent = e => setContent(e.target.value);
  
  const savePost = () => {
    if (title && content) {
      dispatch(addPost({
        id: nanoid(),
        title,
        content,
      }));
    }

    setTitle('');
    setContent('');
  };

  return (
    <Grid direction="column">
      <GridItem behavior="fixed">
        <input
          type='text'
          aria-label='Set title'
          placeholder="Title"
          value={title}
          onChange={updateTitle}
        />
      </GridItem>
      <GridItem behavior="fixed">
        <input
          type='text'
          aria-label='Set content'
          placeholder="Content"
          value={content}
          onChange={updateContent}
        />
      </GridItem>
      <GridItem behavior="fixed">
        <button
          type='button'
          onClick={savePost}
        >
          Save
        </button>        
      </GridItem>
    </Grid>
  );
};

export default Posts;
