import React from "react"

const publications = [
  {
    title: "",
    authors: "",
    intro: "",
    image: "",
  },
]
export default function PubList() {
  return <>
    <h2>Publications</h2>
    <p>
      My current research focus lie at the intersection between unsupervised
      representation learning, reinforcement learning, meta-learning and
      robotics. Specifically I am working on unsupervised representation
      learning via RL, and unsupervised RL.
    </p>
    <p>
      In my past life I did atomic physics and quantum computing. You can
      see more of these work&nbsp;
      <a href="https://scholar.google.com/citations?user=vaQcF6kAAAAJ">here</a>.
    </p>
    {publications.map((pub) =>
      <div>
        {pub.title}
        {pub.authors}
        {pub.intro}
        {pub.image}
      </div>,
    )}
  </>
}