async function retrieve_posts(url){
	let response = await fetch(url);
	let data = await response.json()
	return data
}

//async function logging(posts){
//    console.log(await posts);
//}

async function extract_posts(sub){
	const url = create_url(sub);
  const raw_data = await retrieve_posts(url);
  const infos = raw_data['data']['children'];
  let posts = [];
  for (let i = 0; i < infos.length; i++) {
      posts.push({
          'title': infos[i]['data']['title'],
          'subreddit': infos[i]['data']['subreddit'],
          'selftext': infos[i]['data']['selftext'],
          'created': infos[i]['data']['created'],
          'url': infos[i]['data']['url'],
      });
    }
    return posts
}

function create_url(sub) {
    const url = 'https://www.reddit.com/r/aww/top/.json?sort=top&t=year&limit=10';
    return url;
}
//const sub = 'aww';
//const posts = extract_posts(sub);

//(async () => {
    //console.log(await posts)
//})().catch(err => {
    //console.error(err);
//});


//logging(posts);


export default extract_posts;
