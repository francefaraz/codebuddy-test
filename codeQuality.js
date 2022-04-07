// level {1/2/3}


// level 2 


  const getUsers=async()=>{
    const [user,Profile,p] = await Promise.all(getUser(), getProfile(), getPosts());
    const userProfile = {
        user: user,
        profile: Profile,
        posts: p
      };
     
    
    return userProfile;


  }