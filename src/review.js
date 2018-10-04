import React, { Component } from "react";
import './style/review.css';
class Review extends Component {
  render() {
    return (
      <div className="review">
        <h2>Reviews</h2>
        
        <div>
        <p>From the time I called Mandy to the actual service being done she exceeded expectations! Being responsive, useful suggestions and answered all of my questions. She is super detail oriented, hard working and did a great job, the name OCD cleaning is fitting and what else would you want with a cleaner?! Mandy has enhanced the reputation of my Corporate Housing company with her standards and I am forever grateful for her job well done, every time!<span className="reviewer">     Jenell T.</span></p>
        
        <p>Mandy’s professionalism shines through every room she cleans. But there is also so much more to her than just cleaning your home. Mandy’s passion is in helping you make a space your home. She has taken my small space and helped me arrange it so that it looks breath-taking. 
           I recommended her to a friend who’s mother sadly had to transition to assisted living and she went through every room and helped him reorganize/donate/clean and all the while she respected the emotional toll of this project. She worked to keep his mother’s continued presence in the home. 
          Amanda sees solutions/concepts that I can’t see. She can reorganize a space, a room, and/or a book shelf and it will look like a work of art. Her talents are as boundless as her energy. I honestly don’t know what I would do without her keen eye and attention to detail.<span className="reviewer">     Fabienne Z.</span></p>
          
          <p>I don't quite know what I would do without Mandy and the OCD Crew.  Not only is my home spotless but she goes above and beyond.  One day, as guests were arriving, she called to let me know I had an issue with our bathroom shower.  I immediately tried calling plumbers to no avail and the plumbing supply place for new parts - Mandy, calm as a cucumber said I think I can take care of this.  She picked up supplies and had it fixed in a couple of hours.<span className="reviewer">     Kelly H.</span></p>
          
        </div>
        
      </div>
    );
  }
}
 
export default Review;