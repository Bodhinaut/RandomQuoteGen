var currentQuote = '';
var quotes = [
'\u201CMeditation is to be aware of every thought and of every feeling, never to say it is right or wrong, but just to watch it and move with it. In that watching, you begin to understand the whole movement of thought and feeling. And out of this awareness comes silence\u201D. -  Jiddu Krishnamurti',
'\u201CHave you not noticed that love is silence? It may be while holding the hand of another, or looking lovingly at a child, or taking in the beauty of an evening. Love has no past or future, and so it is with this extraordinary state of silence.\u201D -  Jiddu Krishnamurti',
'\u201CA quiet mind is all you need. All else will happen rightly, once your mind is quiet. As the sun on rising makes the world active, so does self-awareness affect changes in the mind. In the light of calm and steady self-awareness, inner energies wake up and work miracles without any effort on your part.\u201D -   Nisargadatta Maharaj',
'\u201CLet silence take you to the core of life.\u201D  \u2013 Rumi',
'\u201CSilence is a true friend who never betrays.\u201D \u2013 Confucius',
'\u201CYou throw thorns, falling in my silence they become flowers.\u201D \u2013 Gautama Buddha',
'\u201CSilence is an empty space, space is the home of the awakened mind.\u201D \u2013 Gautama Buddha',
'\u201CCare about what other people think and you will always be their prisoner.\u201D \u2013 Laozi',
'\u201CNot thinking about anything is Zen. Once you know this, walking, sitting, or lying down, everything you do is Zen.\u201D \u2013 Bodhidharma',
'\u201CIf you use your mind to study reality, you won\u2019t understand either your mind or reality. If you study reality without using your mind, you\u2019ll understand both.\u201D \u2013 Bodhidharma',
'\u201CThe ultimate Truth is beyond words. Doctrines are words. They\u2019re not the way.\u201D \u2013 Bodhidharma',
'\u201CWhen we\u2019re deluded there\u2019s a world to escape. When we\u2019re aware, there\u2019s nothing to escape.\u201D \u2013 Bodhidharma',
'\u201CTrying to find buddha or enlightenment is like trying to grab space.\u201D \u2013 Bodhidharma',
'\u201CBe empty of worrying. Think of who created thought. Why do you stay in prison when the door is wide open? Move outside the tangle of fear-thinking. Live in silence. Flow down and down in always widening rings of being.\u201D  \u2013 Unknown',
'\u201CBeyond The Witness, there is the Infinite Intensity of Emptiness and Silence.\u201D \u2013 Sri Nisargadatta Maharaj',
'\u201CThe Tao that can be spoken of, is not the true Tao.\u201D \u2013 Lao Tzu',
'\u201CThe vital essence of all things, it is this that brings them to life, it generates the five grains below, and becomes the constellation of stars above, when flowing amid the heavens and earth we call them ghostly and numinous, when stored within the chests of human beings, we call them sages.\u201D \u2013 Nei Yeh',
'\u201CIn the beginner\u2019s mind there are many possibilities, but in the expert\u2019s there are few\u201D \r\n\u2015 Shunryu Suzuki',
'\u201CGood and evil transcend upon enlightenment \u201D \u2013 The Buddha',
'\u201CThe highest good is like water, it is because it does not contend, that it is never at fault \u201D \u2013 Dao de Jing',
'\u201CWhen you realize that there is no method, no system, no mantra, no teacher, nothing in the world that is going to help you to be quiet, when you realize the truth that it is only the quiet mind that sees, then the mind becomes extraordinarily quiet. It is like seeing danger and avoiding it. In the same way, seeing that the mind must be completely quiet, it is quiet. \u201D \u2013 Jiddu Krishnamurti',
'\u201CEnlightenment is a destructive process. It has nothing to do with becoming better or being happier. Enlightenment is the crumbling away of untruth. It\'s seeing through the facade of pretense. It\'s the complete eradication of everything we imagined to be true.\u201D \u2015 Adyashanti',
'\u201CAll that is necessary to awaken to yourself as the radiant emptiness of spirit is to stop seeking something more or better or different, and to turn your attention inward to the awake silence that you are.\u201D \u2015 Adyashanti',
'\u201CIn the end it\u2019s all very simple. Either we give ourselves to Silence or we don\u2019t.\u201D \u2015 Adyashanti',
'\u201CWhen we believe what we think, when we take our thinking to be reality, we will suffer.\u201D \u2015 Adyashanti, Falling Into Grace',
'\u201Cit is discrimination and attachment which produces all evil and faults in the world\u201D (Suzuki, 1932).',
'\u201CIt is only when all discrimination halts, that which remains is the true and essential nature of things\u201D (Suzuki, 1932).',
'\u201CEvery thought is practice, we don\u2019t have to read to find out about Buddhism, every thought is Buddhism. Consider existence, consider nonexistence. Anyone who does research practices Zen. We practice Zen when we drink a cup of tea or when we eat a bowl of rice. Zen is the basis for all forms of practice.\u201D  - Red Pine',
'\u201CIf you fall in love with the road, you will forget the destination\u201D (Wolinsky, 2010).',
'\u201CDon\u2019t be dualistic, the original mind is one substance, if mind is empty and ready, we can be ready for anything, in the expert\u2019s mind there are fewer possibilities, in the beginner\u2019s mind there are many\u201D (Wolinsky, 2010).',
' \u201CWords are subject to birth and death, meaning is not.\u201D The existence or non-existence of language is indeterminate, All things are empty, words describe words, describe words, when you search for the center of anything, all falls apart upon investigation. - Bodhidharma on the La\u1E45k\u0101vat\u0101ra Sutra',
'\u201CUnless people live in harmony with others, how can they expect to cultivate the necessary peace of mind to see through the delusions they have accumulated over countless lifetimes?\u201D \u2013 Buddha near death',
'\u201CAll spiritual paths are pointers at best and become religious dogma at worst. Zen, although a \u201Cclean\u201D form of Buddhism with its magnificent Koans which both lure and attract the deconstruction or de-conditioning of the mind, nevertheless carries with it (if these Koans are taken as a real thing, a real roadmap a real path) the same traps as any other dogma.\u201D \u2013 Wolinksy (2010)',
'\u201CBe aware of precognitive traps that offer pleasure and rewards for understanding and learning the words and their meanings. This deeply embedded current only assures more craving and a fixation on learning more and more words to have more and more experiences with the belief that both experiences words and understanding will lead to the ultimate experience, termed some form of bliss for all eternity called\u201CEnlightenment\u201D \u2013 Wolinksy (2010)',
'\u201C\u2026all experiences will lead you to is more experiences\u2026expect nothing from experiences\u2026\u201D Nisargadatta Maharaj',
'\u201CWhen you try to attain your mind wonders somewhere else, stop the wondering, don\u2019t attain all is there.\u201D - DT Suzuki',
'\u201CLooking for peace is like looking for a turtle with a mustache: You won\'t be able to find it. But when your heart is ready, peace will come looking for you.\u201D \u2015 Ajahn Chah',
'\u201CYou are your own teacher. Looking for teachers can\u2019t solve your own doubts. Investigate yourself to find the truth - inside, not outside. Knowing yourself is most important.\u201D \u2015 Ajahn Chah',
'\u201CIt is not for me to judge another man\'s life. I must judge, I must choose, I must spurn, purely for myself. For myself, alone.\u201D \u2015 Hermann Hesse, Siddhartha',
'\u201CWhat could I say to you that would be of value, except that perhaps you seek too much, that as a result of your seeking you cannot find.\u201D \r\n\u2015 Hermann Hesse, Siddhartha',
'\u201CIt may be important to great thinkers to examine the world, to explain and despise it. But I think it is only important to love the world, not to despise it, not for us to hate each other, but to be able to regard the world and ourselves and all beings with love, admiration and respect.\u201D \r\n\u2015 Hermann Hesse, Siddhartha',
'\u201CMy real self wanders elsewhere, far away, wanders on and on invisibly and has nothing to do with my life.\u201D \u2015 Hermann Hesse, Siddhartha',
'\u201COpinions mean nothing; they may be beautiful or ugly, clever or foolish, anyone can embrace or reject them.\u201D \u2015 Hermann Hesse, Siddhartha',
'\u201CWithin you, there is a stillness and a sanctuary to which you can retreat at anytime and be yourself.\u201D \u2015 Hermann Hesse, Siddhartha',
'\u201CThe opposite of every truth is just as true.\u201D \u2015 Hermann Hesse, Siddhartha',
'\u201CLive quietly in the moment and see the beauty of all before you. The future will take care of itself......\u201D \u2015 Paramahansa Yogananda, Autobiography of a Yogi',
'\u201CYou have come to earth to entertain and to be entertained.\u201D \u2015 Paramahansa Yogananda, Autobiography of a Yogi',
'\u201CStillness is the altar of spirit.\u201D \u2015 Paramahansa Yogananda, Autobiography of a Yogi',
'\u201CAll philosophies are mental fabrications. There has never been a single doctrine by which one could enter the true essence of things.\u201D \u2015 N\u0101g\u0101rjuna',
'\u201CThe victorious ones have said, That emptiness is the relinquishing of all views. For whomever emptiness is a view, That one has achieved nothing.\u201D  \u2015 N\u0101g\u0101rjuna, The Fundamental Wisdom of the Middle Way: N\u0101g\u0101rjuna\'s M\u016Blamadhyamakak\u0101rik\u0101',
'How will the mind become quiescent? By the enquiry \"Who am I?\". The thought \"Who am I?\" will destroy all other thoughts, and like the stick used for stirring the burning pyre, it will itself in the end get destroyed. Then, there will arise Self-realization. ~ Ramana Maharshi',
'Realization is nothing new to be acquired. It is already there, but obstructed by a screen of thoughts. All our attempts are directed to lifting this screen and then realization is revealed. ~ Ramana Maharshi'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];


}

function tweet() {
  var quote = document.getElementById('quoteDisplay').innerHTML // Replace this with appopriate quote that you wanted.
  var text = encodeURI(quote);
  var tweet_url = "https://twitter.com/intent/tweet?text=" + text;
  window.open(tweet_url);
};
document.getElementById("tweetButton").addEventListener("click", tweet);

