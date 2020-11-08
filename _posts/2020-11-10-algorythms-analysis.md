---
layout: blog
title:  "algorythm analysis"
date:   2020-01-11 18:13:54 +0300
categories: jekyll update
---

## Imran Ahmad. “40 Algorithms Every Programmer Should Know”.
---

<br>
## Algorithms can be devided into 3 types:

| Data-intensive algorithms                                                                                                                                                                                                                                                                                                                                                                                                     | Compute-intensive algorithms                                                                                                                                                                                                                                                                                                                                         | Both data and compute-intensive algorithms                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---:                                                                                                                                                                                                                                                                                                                                                                                                                         | :---:                                                                                                                                                                                                                                                                                                                                                                | :---:                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Data-intensive algorithms are designed to deal with a large amount of data. They are expected to have relatively simplistic processing requirements. A compression algorithm applied to a huge file is a good example of data-intensive algorithms. For such algorithms, the size of the data is expected to be much larger than the memory of the processing engine (a single node or cluster) and an iterative processing. | Compute-intensive algorithms have considerable processing requirements but do not involve large amounts of data.  A simple example is the algorithm to find a very large prime number. Finding a strategy to divide the algorithm into different phases so that at least some of the phases are parallelized is key to maximizing the performance of the algorithm. | There are certain algorithms that deal with a large amount of data and also have considerable computing requirements. Algorithms used to perform sentiment analysis on live video feeds are a good example of where both the data and the processing requirements are huge in accomplishing the task.  Such algorithms are the most resource-intensive algorithms and require careful design of the algorithm and intelligent allocation of available resources. |

<br>
## Algorythm can be determied by its
* Perfomance:\
**To be useful, any algorithm should have three key features:**\
  ** It should be correct. An algorithm won't do you much good if it doesn't give you the right answers.\
  ** A good algorithm should be understandable. The best algorithm in the world won't do you any good if it's too
  complicated for you to implement on a computer.\
  ** A good algorithm should be efficient. Even if an algorithm produces a correct result, it won't help you much
  if it takes a thousand years or if it requires 1 billion terabytes of memory.

* **Space complexity**\
Space complexity analysis estimates the amount of memory required by the algorithm to process input data. While processing the input data, the algorithm needs to store the transient temporary data structures in memory. The way the algorithm is designed affects the number, type, and size of these data structures.

* **Time complexity**\
Time complexity analysis estimates how long it will take for an algorithm to complete its assigned job based on its structure. In contrast to space complexity, time complexity is not dependent on any hardware that the algorithm will run on. Time complexity analysis solely depends on the structure of the algorithm itself. The overall goal of time complexity analysis is to try to answer these important questions—will this algorithm scale? How well will this algorithm handle larger datasets?
<br>

| Best case | Worst Case | Average Case |

