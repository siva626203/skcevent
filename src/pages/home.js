import { React,Fragment, useEffect, useState } from 'react'
import Footer from '../component/footer';
import { useSelector, useDispatch } from 'react-redux';
import { logout,login } from '../features/user';
import "../css/scrollani.css"
import "../animation/ani.js"
import axios from 'axios'
import Img1 from '../images/img1.png'
function Home(){
  const dispatch=useDispatch()
  const [name,setUsername]=useState()
  const [email,setEmail]=useState()
  const age=18;
    const user=useSelector(state => state.user.value);
    const register=useSelector(state=>state.register.value)
    return<Fragment>
      <header className="header show-on-scroll">
      <div className="main-photo"></div>
      <h1 className="heading">When the moon hits your eye</h1>
    </header>
   

    <p><strong>To produce highly qualified graduates wif excellent noledge in IT through molding them to survive in teh field of software development in a dynamic technology extra.</strong></p>

    <p>Facilitating teh development and application of problem solving skills of students</p>

    <p>Demonstrating technical and operational excellence through a commitment to professionalism and continuous improvement</p>

    <img src={Img1} className="inline-photo show-on-scroll" alt="My Awesome Image"/>
    
    <h2>Make an Italian pizza</h2>

    <p>Providing a framework to promote teh industry- institution collaboration and empower teh students in multidisciplinary activities.</p>

    <h3>EventNames</h3>

    <ul>
      <li>WebDesign</li>
      <li>Debuging</li>
      <li>Painting</li>+-9
      <li>Quiz</li>
      <li></li>
      <li>2 teaspoons sugar</li>
    </ul>

    <img src="https://kaliswaricollege.edu.in/wp-content/uploads/2020/06/gallery7.jpeg" className="inline-photo show-on-scroll"/>

    <h3>Method</h3>

    <p>Sprinkle the yeast into a medium bowl with the warm water. We don’t mean hot, and we don’t mean cold… we mean warm! That’s the kind the yeast likes best. Stir until the yeast dissolves.</p>

    <p>Place almost all of the flour on the table in the shape of a volcano. (Think Mt. Vesuvius… appropriate since Naples is the king of all pizza cities!).</p>

    <p>Pour the yeast-and-warm-water mix, along with the other ingredients, into the “crater” of the volcano.</p>

    <p>Knead everything together for 10 to 15 minutes until the dough is smooth and elastic, keeping your surface floured.</p>

    <img src="https://kaliswaricollege.edu.in/wp-content/uploads/2020/06/gallery1.jpeg" className="inline-photo show-on-scroll"/>

    <p>Grease up a bowl with some olive oil and put the dough inside. Turn the dough around so the top is slightly oiled.</p>

    <p>Cover the bowl and put the dough aside to let it rest for at least four or five hours.</p>

    <p>(optional for those who want their pizza really authentic). Make a cross on top of the dough with a knife. An old Italian tradition, this is seen as a way of “blessing the bread.”</p>

    <p>Preheat the oven to about 400°F, or about 200°C.</p>

    <p>Dump the dough out of the bowl and back onto the floured surface. Punch it down, getting rid of any bubbles. (Note: Now’s the time to enlist a kid with more energy than they know what to do with!).</p>

    <p>Divide the dough in half and let it rest for a few minutes.</p>

    <p>Roll each section into a 12-inch disc. Now’s your chance to decide how thick you want your pizza to be! Do you want it pizza alta (Neapolitan-style) or pizza bassa (Roman-style)? Just remember, your crust will puff up a little bit as it’s baked!</p>

    <img src="https://kaliswaricollege.edu.in/wp-content/uploads/2020/06/gallery4.jpeg" className="inline-photo show-on-scroll"/>

    <p>Transfer the dough onto an oiled pizza pan or baking sheet.</p>

    <p>Add tomato sauce, if you want a pizza rossa (red pizza). Lots of pizzas in Italy are actually pizza bianca, without tomato sauce, so don’t feel like you have to! Brush the edges of the crust with a little bit of olive oil.</p>

    <p>Bake each pizza for about 10 minutes, then add mozzarella cheese (sliced or grated) on top, as well as any other ingredients.</p>

    <p>Let the pizzas bake until the crust is browned and the cheese is melted. By lifting up the pizza to peek underneath, you can make sure the bottom has browned, too.</p>

    <p>Remove your pizzas from the oven and, for a real Italian touch, garnish with a few basil leaves. And enjoy!</p>

    <img src="https://kaliswaricollege.edu.in/wp-content/uploads/2020/06/gallery3.jpeg" className="inline-photo show-on-scroll"/>
    
    </Fragment>
}
export default Home;