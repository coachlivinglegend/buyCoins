// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 330) {
//         document.querySelector('.mini__profile').style.opacity = 1
//     } else {
//         document.querySelector('.mini__profile').style.opacity = 0
//     }
    
//     if (window.scrollY >= 60) {
//         document.querySelector('.main__view__nav').style.paddingTop = 0
//     } else {
//         document.querySelector('.main__view__nav').style.paddingTop = "9px"
//     }
// })

// const query = 
// `
// {
//   repositoryOwner(login: "ireade") {
//     avatarUrl
//     login
//     url
//     ... on User {
//       bio
//       company
//       followers {
//         totalCount
//       }
//       following {
//         totalCount
//       }
//       name
//       location
//       twitterUsername
//       url
//       websiteUrl
//       starredRepositories {
//         totalCount
//       }
//     }
//     repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
//       totalCount
//       nodes {
//         id
//         description
//         updatedAt
//         stargazerCount
//         descriptionHTML
//         forkCount
//         primaryLanguage {
//           id
//           name
//           color
//         }
//         homepageUrl
//         isFork
//         isPrivate
//         name
//         owner {
//           login
//         }
//         licenseInfo {
//           name
//         }
//         url
//         isArchived
//       }
//     }
//   }
// }`

// const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": "Bearer 92518f897b52c87c9b2a47a6f61ab2b81386ac66",
//     },
//     body: JSON.stringify({ query })
// }
//     //92518f897b52c87c9b2a47a6f61ab2b81386ac66

// let repoDetails
// fetch('https://api.github.com/graphql', options)
// .then(res => res.json())
// .then(data => {
//   console.log(data.data)
//   setRepoProfile(data.data.repositoryOwner)
//   setRepoList(data.data.repositoryOwner.repositories)
// })

// const setRepoProfile = ({avatarUrl, bio, company, followers, following, location, login, name, twitterUsername, url, websiteUrl, repositories, starredRepositories}) => {
//   document.querySelectorAll('.user__avatar').forEach(img => img.src = `${avatarUrl}`)
//   document.querySelector('.user__name__name').innerHTML = `${name}`
//   document.querySelectorAll('.user__handle').forEach(handle => handle.innerHTML = `${login}`)
//   document.querySelector('.user__bio').innerHTML = `${bio}`
//   document.querySelector('.user__url').alt = `${name}`
//   document.querySelector('.user__url').href = `${url}`
//   document.querySelector('.follower__count').innerHTML = `${followers.totalCount}`
//   document.querySelector('.following__count').innerHTML = `${following.totalCount}`
//   document.querySelector('.star__count').innerHTML = `${starredRepositories.totalCount}`
//   document.querySelector('.repoCount').innerHTML = `${repositories.totalCount}`

//   company ? document.querySelector('.user__company').innerHTML = `${company}` : document.querySelector('.li__company').style.display = "none"
//   location ? document.querySelector('.user__location').innerHTML = `${location}` : document.querySelector('.li__location').style.display = "none"
//   websiteUrl ? document.querySelector('.user__website').innerHTML = `${websiteUrl}` : document.querySelector('.li__website').style.display = "none"
//   twitterUsername ? document.querySelector('.user__twitter').innerHTML = `@${twitterUsername}` : document.querySelector('.li__twitter').style.display = "none"
// }

// const setRepoList = ({nodes}) => {
//   console.log({nodes})
//   const repoToRender = nodes.map(({description, forkCount, isFork, isPrivate, licenseInfo, name, owner, primaryLanguage, isArchived, stargazerCount, updatedAt, url}) => {
//     return `
//       <li class="user__repo__list__items">
//         <div>
//             <div class="repo__name">
//               <p><span><a alt=${name} href=${url}>${name}</a></span></p>
//               ${isPrivate ? "<span class='repo__private'>Private</span>" : ""}
//               ${isArchived ? "<span class='repo__private'>Archived</span>" : ""}
//             </div>
//             <div class="repo__desc">
//                <p>${description ? description : ""}</p>
//             </div>
//             <div class="repo__miniDetails">
//               ${
//                 primaryLanguage 
//                 ?
//                 ` <span>
//                     <span class="repo__language__color" style="background-color: ${primaryLanguage.color}"></span>
//                     <span class="repo__language">${primaryLanguage.name}</span>
//                   </span>                
//                 `
//                 :
//                 ""
//               }
//               ${
//                 stargazerCount !== 0 
//                 ?
//                 `
//                   <span>
//                       <svg aria-label="star" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
//                       ${stargazerCount}
//                   </span>
//                 `
//                 :
//                 ""
//               }
//               ${
//                 forkCount !== 0 
//                 ?
//                 `
//                   <span>
//                       <svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
//                       ${forkCount}
//                   </span>                
//                 `
//                 :
//                 ""
//               }
//                 <span>Upadated on ${new Date(updatedAt).toLocaleString("default", {month: "short", day: "numeric"})}</span>
//             </div>
//         </div>
//         <div>
//             <button>
//                 <span style="display: flex; align-items: center;">
//                     <svg aria-label="star" style="margin-right: 6px; fill: #586069" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
//                     Star                                    
//                 </span>
//             </button>
//         </div>
//       </li>
//       `
//     })
//     .join("");
//     console.log({repoToRender})
//     document.querySelector('.user__repo__list__ul').innerHTML = repoToRender
//   }