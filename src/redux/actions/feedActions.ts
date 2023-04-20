import { Dispatch } from "redux";
import { ActionTypes, FeedAction, Post } from "../../types/feedTypes";
import { AnyAction } from "@reduxjs/toolkit";

const apiKey = process.env.REACT_APP_MY_KEY;

// definizione delle azioni
const getPostsRequest = (): FeedAction => ({
  type: ActionTypes.GET_POSTS_REQUEST,
  loading: true,
  error: null,
});

const getPostsSuccess = (posts: Post[]): FeedAction => ({
  type: ActionTypes.GET_POSTS_SUCCESS,
  payload: posts,
  loading: false,
  error: null,
});

const getPostsFailure = (error: string): FeedAction => ({
  type: ActionTypes.GET_POSTS_FAILURE,
  loading: false,
  error: error,
});

// AGGIUNGERE ESPERIENZA

const addPostRequest = (): FeedAction => ({
  type: ActionTypes.ADD_POST_REQUEST,
  loading: true,
  error: null,
});

const addPostSuccess = (post: Post): FeedAction => ({
  type: ActionTypes.ADD_POST_SUCCESS,
  payload: post,
  loading: false,
  error: null,
});

const addPostFailure = (error: string): FeedAction => ({
  type: ActionTypes.ADD_POST_FAILURE,
  error: error,
  loading: false,
});

// OTTENERE ESPERIENZA SINGOLA

const getPostRequest = (): FeedAction => ({
  type: ActionTypes.GET_POST_REQUEST,
  loading: true,
  error: null,
});

const getPostSuccess = (post: Post): FeedAction => ({
  type: ActionTypes.GET_POST_SUCCESS,
  payload: post,
  loading: false,
  error: null,
});

const getPostFailure = (error: string): FeedAction => ({
  type: ActionTypes.GET_POST_FAILURE,
  loading: false,
  error: error,
});

// MODIFICA ESPERIENZA SINGOLA

const editPostRequest = (): FeedAction => ({
  type: ActionTypes.EDIT_POST_REQUEST,
  loading: true,
  error: null,
});

const editPostSuccess = (post: Post): FeedAction => ({
  type: ActionTypes.EDIT_POST_SUCCESS,
  payload: post,
  loading: false,
  error: null,
});

const editPostFailure = (error: string): FeedAction => ({
  type: ActionTypes.EDIT_POST_FAILURE,
  loading: false,
  error: error,
});

const deletePostRequest = (): FeedAction => ({
  type: ActionTypes.DELETE_POST_REQUEST,
  loading: true,
  error: null,
});

const deletePostSuccess = (id: string): FeedAction => ({
  type: ActionTypes.DELETE_POST_SUCCESS,
  payload: id,
  loading: false,
  error: null,
});

const deletePostFailure = (error: string): FeedAction => ({
  type: ActionTypes.DELETE_POST_FAILURE,
  loading: false,
  error: error,
});

export const fetchPosts = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(getPostsRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const posts = await response.json();
      dispatch(getPostsSuccess(posts));
      console.log("nella fetch exp:", posts);
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(getPostsFailure(error.message));
      } else {
        dispatch(getPostsFailure("An unknown error occurred"));
      }
    }
  };
};

export const addPost = (post: Post) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(addPostRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );
      const data = await response.json();

      if (response.ok) {
        dispatch(addPostSuccess(data));
      } else {
        dispatch(addPostFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(getPostFailure(error.message));
      } else {
        dispatch(getPostFailure("An unknown error occurred"));
      }
    }
  };
};

export const fetchPost = (postId: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(getPostRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const post = await response.json();
      dispatch(getPostSuccess(post));
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(getPostFailure(error.message));
      } else {
        dispatch(getPostFailure("An unknown error occurred"));
      }
    }
  };
};

export const editPost = (post: Post) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(editPostRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );

      if (response.ok) {
        const updatedPost = await response.json();
        dispatch(editPostSuccess(updatedPost));
      } else {
        const data = await response.json();
        dispatch(editPostFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(editPostFailure(error.message));
      } else {
        dispatch(editPostFailure("An unknown error occurred"));
      }
    }
  };
};

export const deletePost = (postId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(deletePostRequest());

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.ok) {
        dispatch(deletePostSuccess(postId));
      } else {
        const data = await response.json();
        dispatch(deletePostFailure(data.error));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(deletePostFailure(error.message));
      } else {
        dispatch(deletePostFailure("An unknown error occurred"));
      }
    }
  };
};
