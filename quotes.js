const quotes = [ 
    "I have back problems, I know, I’m a grandpa - Samik 2023",
    "Don’t you agree that Danny is spicy 🥵 - Samik 2023",
    "I coached my yr 5 friend last year through 4 boyfriends and 4 break ups - Lilian 2023",
    "Angela chair guy - Aanya 2023",
    "Like I spawned and everyone was like sAmIkKkKkK!!! - Samik 2023",
    "I got an A? SHEEEEEESHHHH! - Kerui 2023",
    "Danny was called sonic the hedgehog - Lola 2023",
    "#SELF LOVE - Lola 2023",
    "Oh you wanna go kid? - Lilian 2023",
    "I’m confuzzled - Kerui 2023", 
    "Lola dreams that Samik licks her toes - Kerui 2023",
    "Kerui is way too messed up - Everyone",
    "I am not innocent, I do know stuff - Kerui 2023",
    "Stop saying that! I copyrighted it - Lilian 2023",
    "I won’t tell piss - Lilian 2023",
    "a Hee hee heee heee ha ha ha aha heee haha - Samik 2023",
    "I LIKE BALLS - Lukas 2023",
    "I like holding balls - Danny 2023",
    "我喜欢吃球 (I eat balls) - Kerui 2023", 
    "It’s white, sticky and tasty - Ming Lang 2023",
    "我喜欢吃大屁股 - Mehrad 2023",
    "My name is Terry! not Kerui! - Kerui 2023",
    "Guys, I deeply do not care whatsoever if I have roasted u abt ur height. If u felt like this has or will offends u as a joke, pls sthu and know that u r a potato - Samik 2023",
    "Y in da kangaroos… - Samik 2023",
    "OMG NO!! MY GPA IS AT 14.56 BECAUSE I GOT AN A!!!! - Sophie 2023",
    "I was so bad cos I went first… I got 90/100 😭 - Sophie 2023",
    "NOOOOO MY GPA WENT DOWN 0.17 POINTS!!! - Dylan 2023",
    "And I’m chilling here with my 13.5 GPA :D - Lilian 2023",
    "SAY THAT AGAIN AND I WILL MURDER YOU SO BAD THAT YOU WON'T EVER BE BLIND AGAIN. YOU’LL BE FREAKIN DEAD - Lilian 2023",
    "YOu KnoW WhAT THaT souNDS liKe? A YOU PROBLEM! - Mostly Lilian. but also nearly everyone in 700 2023",
    "TOFFEE IS DA BEST - Lilian 2023",
    "My hair just sticks up - Yiming",
    "#itspanglangnow - Sophie 2023",
    "Nope. No. Fine… maybe. Nah… - Sophie 2023",
    "Short people always rage quit lol - Lilian 2023",
    "OMG I’m gonna fail!!! *gets A+* - Everyone in Ignite 2023",
    "I only see one capybara out of like sex - Lilian 2023",
    "So hopefully he will fix the white issue - Dylan 2023",
    "ThAtS whAT shE sAId! - Ming Lang 2023",
    "Stop swearing! - Kerui 2023",
    "ITS LILIAN HERE AND I SAY BALLS ARE NOT TASTY - Lilian 2023",
    "Yes sire! - Ming Lang 2023",
    "Dylan I hate you! - Kerui 2023",
    "You are so annoying - Kerui 2023",
    "Idk? I know what idk means! Idk why but I will keep saying idk - Kerui 2023", 
    "*Dies when someone says aaHAna* - Aahana 2023",
    "*Exaggerated double eyebrow raise* - Ming Lang 2023",
    "That’s racist - Samik 2023",
    "You’re such a pastry - Samik 2023",
    "Kerui is like my emotional support animal - Samik 2023",
    "Y’all sweats - Samik 2023",
    "*Insert huge essay here* - Dylan 2023",
    "Danny’s such a baddieeeee - Aanya 2023",
    "TRAIIIITORRRRRRRRRRRRRR - Oliver 2023",
    "MAGENTAAAAA - Oliver 2023", 
    "iF yOu sPeLl ApPlEsAuCe, WiTh JuSt A’s, tHeN yOu GeT AAHHHHHHHHHHHH - Oliver 2023",
    "Excuse my pro speeling and grammartation skillz - Lilian 2023",
    "Why doesn't anyone believe that I didn't study for Ignite?! - Jesper 2023",
    "A pastry no greater hath I seen - Samik 2023",
    "Whaaaaaaaaaaaaaaat? - Kerui 2023",
    "*Dies after seeing 688 one more time* - Kerui 2023",
    "Stop playing the mind-numbingly boring road car game! - Everyone to Lukas",
    "Coding this was PAAAAAIIIIINNNNNN! - Kerui 2023",
    "GUYS! ITS A WILD MEHRAD! TAKE A PIC QUICK 📸 - Lola 2023",
    "I’m proud of my B - Linuka 2023", 
    "Be scared of Samik, he's short - Lola 2023",
    "CAN'T BEAT MY 2,1 MUDDA QUACKERS - Samik 2023",
    "Lola: 👹👹👹, Samik: Why are you spamming pics of Mehrad?",
    "Nahhhhhh (sarcasm) - Linuka 2023",
    "Tut tut tut tut tut *sigh*, very disappointed in you -Tyler 2023",
    "Apologies - Tyler 2023",
    "The madman, he did it - Dylan 2023",
    "MEANIE BOMBINIE - Lola 2023",
    "Bro got comebacks from wattpad - Lilian 2023",
    "ChIlL DaH MoOlAH KiDs - Lukas 2023",
    "I am very sorry for the sin I have commited - Samik 2023",
    "Did *someone in 700* say *something sus and definitely not something they said*? - Ming Lang 2023",
    "Did someone just say my name? - Ming Lang 2023",
    "I love being annoying - Kerui 2023",
    "I'm not tall, your just short - Tyler 2023",
    "I have been accused of liking 6 different people in the past week :(, has it become a meme at this point to annoy me? - Kerui 2023",
    "We are in Year 7, not Year 12! - Kerui 2023",
    "Year 7 is a good year to date - Isabelle 2023",
    "That's BuLlYiSm! - Everyone in 700 2023",
    "Stop it, I don't like it! - Everyone in 700 2023",
    "I hate Kerui. He plays a bad instrument - Jesper 2023",
    "Jesper is lazy, selfish, stupid and single-minded - Kerui 2023",
    "Oh no! Whatever shall I do - Dylan 2023",
    "After a long while being in the same class, still no one asked. - Ming Lang 2023",
    "But I didn’t ask about you not having asked! - Oliver 2023",
    "*Howling like a monkey* - Oliver 2023",
    "Bo’lle o’ wa’er - Kerui 2023",
    "Can I borrow the sharpener... again? - Tyler 2023",
    "Why are there big flying sheep in the sky? - Ming Lang 2023",
    "I don't press things if there is no ✨OOH SHINY BUTTON✨ - Lilian 2023",
    "THAT'S CALLED EXLUSION - Lilian 2023",
    "It's like maths, except I can't fail - Dylan 2023",
    "Cus why not?! - Dylan 2023",
    "CAUGHT IN 4K - Samik 2023",
    "I'll do it tomorrow cause I am lazy - Kerui 2023",
    "WHAT SCHOOL DID THEY GO TO?? Facebook time ;) - Lilian 2023",
    "I love how I'm friends with Jesper, Kerui and Lilian but they all seem to despise each other - Dylan 2023",
    "I have the memory of Dory - Lilian 2023",
    "Follow the 20-20-20 rule. After 20 minutes, stare at something 20 feet away and go into the forest for 20 years - Kerui 2023",
    "My backyard looks like a pillow has been burst onto it - Kerui 2023",
    "I suck at coding, just like you suck at editing KERUI - Dylan 2023",
    "Why are there big flying sheep in the sky? - Ming Lang 2023",
    "CANCEL HIM/HER! - Ming Lang 2023",
    "CANCEL THOSE ANDROMEDAN PAPAYAS - Samik 2023",
    "Oh river those mother quakers - Samik 2023",
    "I saw bigger though 😋😋😋 - Lola 2023",
    "That sounds like a new quote! - Dylan, every 0.00382917284 seconds, 2023",
    "OMG THANK YOU GIRAFFE AND PIGEON - Lilian 2023",
    "Espie Van Hoosejick with that sigma male top g giga chad plays - Samik 2023",
    "Dylan 有时候很烦，但是 Kerui 更烦, Lilian 最烦 - Jesper 2023",
    "Who's the idiot now Samik - Lola 2023",
    "Am I scary - Lilian 2023",
    "你为什么要翻译这个你这个白痴 - Jesper 2023",
    "Off to the mental asylum you go - Dylan 2023",
    "Shiny button must become so shiny that all blind people can see again :D - Lilian 2023",
    "*Insert suffering here* - Kerui 2023",
    "I'll throw this paper plane into Tyler's face and pop his pimples - Linuka 2023",
    "I don't want to be innocent, I want to know things!! - Lilian 2023",
    "Freedom! That little piece of slime will no longer darken the world no more! Stupid Lilian - Kerui 2023",
    "I am good, you are bad, I like making you feel sad - Yiming/Jesper 2023",
    "*Jesper says he is dumb* Takes one to know one, an amateur can't recognise an expert, only an expert can recognise the amateur - Kerui",
    "nOt nEcCeSaRiLy - Lilian 2023",
    "Samik: Lilian is as small as an ant, Lilian: Barely",
    "Blummin stars and skies I hate Keru and Dylan - Lilian 2023",
    "I wanna be a single Pringle - Lola 2023",
    "I need more emotional support :9, I read more of the Future Girl - Kerui 2023",
    "我会吃你的乌龟 - Lilian 2023",
    "我会吃你的狗 - Lilian 2023",
    "*Hysterical hyena laughing* - Aanya 2023",
    "I ain't doing that, I need to find a way to piss - Kerui 2023",
    "Ching Chong means please in Chinese... Doesn't it? - Samik 2023",
    "Special thanks to Kerui for being gullible - Dylan 2023",
    "If I get below 13 GPA I will be happy lol - Lilian 2023",
    "My name is Lillian not Lilian - Lilian 2023",
    "Keep it PG - Kerui 2023",
    "You go girl!! - Kerui 2023",
    "CHING CHONG 🙏🙏🙏🙏🙏🙏 - Samik 2023",
    "Yiming is such a material girllll!!!- Samik 2023",
    "That’s a quote right there - Dylan 2023",
    "Tweetus deletus - Oliver 2023",
    "You sound like a movie - Jesper 2023",
    "Ah ha ha ha ha - Aysan 2023",
    "They (Jesper, Lilian, Samik, Linuka) are all drunkards and maniacs! - Tyler 2023",
    "I’m black and I have glasses - Samik 2023",
    "Bro is hard when he sees Linuka - Samik 2023",
    "Are you assuming their colour?! - Kerui 2023",
    "I just did 7 years of studying at 10pm - Lukas 2023",
    "I see in soft focus lighting all the time - Kerui 2023",
    "Don't abuse me; I abuse substances - Kerui 2023",
    "I am pissed that I got an A in maths - Mehrad 2023",
    "Nobody cares about Anne- oh wait I SHOULDN'T HAVE SAID THAT - Kerui 2023",
    "Whether you're white, black, yellow or green, you should have equal rights - Kerui 2023",
    "When Dylan says oops, it's likely a catastrophic disaster - Lilian 2023",
    "I AM THE CALCULATOR DYLAN - Lukas 2023",
    "Dylan is the only leader - Mehrad 2023",
    "Let's hope Jesper doesn't have COVID, let's hope he has cancer! - Kerui 2023",
    "Naughty boy Yiming - Jesper 2023",
    "Yimiiiiiiiiiiiinggggggggggggggg - Jesper 2023",
    "This is a no no zone - Lola 2023",
    "You're so monkey - Kerui 2023",
    "我会吃 Mr Ang 的鱼 - Lilian 2023",
    "YOU WANT A GO BRO? - Lola 2023",
    "MY SPIDER SENSES ARE TINGLING - Lola 2023",
    "Grab the conculator - Lola 2023",
    "Finally I am white - Tyler 2023",
    "Aanya why are you staring at Yiming's face??? - Jesper 2023",
    "Van Hoosey - Kerui 2023",
    "Jesper if u say o again then I will actually throw Sophie at u - Lilian 2023",
    "We’re doing growth and development next term! I can’t wait for the practicals - Ming Lang 2023",
    "Going back to Laos gonna eat fried turtles yum - Kerui 2023",
    "I am going to smash you - Lilian 2023",
    "Suck Jesper please - Kerui 2023",
    "If you don't start working me and my straight A friends will storm over there and make you study so much you will forget what getting a B+ feels like - Dylan 2023",
    "My GPA will be as low as Jesper’s height - Lilian 2023",
    "They look more like big red balls - Lilian 2023",
    "Marijuana? Isn't that like margherita? - Lilian 2023",
    "Lilian us - Jesper, Dylan, Enoch, Yiming 2023",
    "Please move Kerui I simp you - Enoch 2023",
    "What do we have?... WE HAVE MATH!!! - Danny 2023",
    "Oh no, dylan, i do not think telling your friends to make an art apocalypse is a very nice thing. This may result in paint getting in eyes and pure colourblindness, even tho Samik Dua will not be affected, this is not a very responsible and leader-like thing to do - Lilian 2023",
    ]; 
