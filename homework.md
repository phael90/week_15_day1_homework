# React IMDB Homework

## Reading

Thinking In React (20 mins) https://facebook.github.io/react/docs/thinking-in-react.html

## Practice

Here's a component from IMDB showing opening movies this week.

- Draw out the skeleton of this app on paper.
- Write down the names of the components and whether they have state or props.

<details>
  <summary>Example Solution (click to expand)</summary>
<ul>
  <li>- CommentBox - State:comments</li>
  <li>
    <ul>
      <li>- CommentList Props:comments
      <ul>
        <li>- Comment Props:comment</li>
        <li>- Comment Props:comment</li>
        <li>- Comment Props:comment</li>
      </ul>
        </li>
    <li>- CommentForm State:author, text Props:handleCommentSubmit(function)</li>
    </ul>
  </li>
 </details>
</ul>
<br>
<br>

![IMDB UK Opening This Week](imdb-opening-this-week.png)

- Once you've sketched this out, **implement the IMDB component in React**.
