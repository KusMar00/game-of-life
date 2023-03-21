import React, { useState } from "react";
import { MdQuestionMark, MdClose } from "react-icons/md";
import "./info.css";

const Info = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="info" onClick={() => setIsOpen(!isOpen)}>
        <MdQuestionMark />
      </div>
      {isOpen && (
        <div className="info-box">
          <div className="close-button" onClick={() => setIsOpen(false)}>
            <MdClose />
          </div>
          <h2>Info</h2>
          <div className="content">
            <p>
              You're our boy dawg, don't even trip. Haha god-damn! Well look
              where being smart got you. I love morty and i hope morty loves me.
              I want to wrap my arms around him and feel him deep inside me.
            </p>
            <p>
              Do you know how many characters there are in the Simpsons Morty?
              There's like a-a billion characters, M-Morty. There was an episode
              where Former President BUSH was their neighbor! Morty! The
              principal and I have discussed it, a-a-and we're both insecure
              enough to agree to a three-way! Morty, I'm a drunk, not a hack.
              They're not infinite universes left in sync with the show.
            </p>
            <p>
              This is because you give Morty Smith bad grades, bitch! Well then
              get your shit together. Get it all together and put it in a
              backpack, all your shit, so it's together. …and if you gotta take
              it somewhere, take it somewhere ya know? Take it to the shit store
              and sell it, or put it in a shit museum. I don't care what you do,
              you just gotta get it together… Get your shit together. I'm sorry
              Summer, your opinion means very little to me. 25 shmeckles?
              I-I-I-I don't even know what that- what is that? Is that a lot?
            </p>
            <p>
              Don't be a baby! You avoid getting shot in real life all the time,
              Morty! Just do the same thing here and we'll be fine! "And"? What
              more do you want tacked on to this? I turned myself into a pickle,
              and 9/11 was an inside job?" God-damn! Get off the high road
              Summer. We all got pink eye because you wouldn't stop texting on
              the toilet.
            </p>
            <p>
              Oh, we're welllll past that, Jerry! Oh, I'm sorry Morty, are you
              the scientist or are you the kid who wanted to get laid? This
              isn't Game of Thrones, Morty. I can finally go on that trip I've
              been talking about.
            </p>
            <p>
              I'm sorry, Morty. It's a bummer. In reality you're as dumb as they
              come. Morty, please. Step back. That vat is full of acid. It will
              melt you completely, leaving only your bones. Holy crap, Morty,
              run! Run for your life, Morty, run! I-I've never seen that thing
              before in my life, Morty, I don't even know what the hell it is!
              We-we gotta get out of here, Morty, it's gonna kill us! We're
              gonna die, Morty! We're gonna die! It's a dream, Morty! We're in
              your dog's dream. The night the dogs captured us, after you cried
              and crapped your pants, we-we all went to sleep. Then I used my
              dream inceptors to put the two of us inside Snuffles' dream.
            </p>
            <p>
              Well I don't like your unemployed genes in my grandchildren,
              Jerry. Hi! I'm Mr Meeseeks! Look at me! Jesus Christ! Did the
              boomy-booms blow up all your wordy-word books? Don't even trip
              about your pants, dawg. We got an extra pair right here.
            </p>
            <p>
              25 shmeckles? I-I-I-I don't even know what that- what is that? Is
              that a lot? Nice to wheat you! This isn't Game of Thrones, Morty.
              If you're talking to a cat, it's an abnormal event, unrelated to
              me. Like when you went to Pluto or fucked my daughter.
            </p>
            <p>
              Oh no. I'm late to class, bitch. This aftershave made women want
              me, but it also made me impotent! Yea and I made the stars that
              became the carbon in your mothers ovaries! I'm Mr. Crowbar, and
              here is my friend, who is also a crowbar!
            </p>
            <p>
              We need a hang glider, and a crotch less uncle sam costume, and I
              want the entire field of your largest stadium covered end to end
              with naked red heads, and I want the stands packed with every man
              that remotely resembles my father. Rubber baby buggy bumpers! You
              ask alotta questions Morty, not very charismatic of you. Wubba
              lubba dub dub!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;
