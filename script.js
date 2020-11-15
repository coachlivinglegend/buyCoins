console.log('buy coins')
const test = "skidii pao pao"

window.addEventListener('scroll', () => {
    if (window.scrollY >= 330) {
        document.querySelector('.mini__profile').style.opacity = 1
    } else {
        document.querySelector('.mini__profile').style.opacity = 0
    }
    
    if (window.scrollY >= 60) {
        document.querySelector('.main__view__nav').style.paddingTop = 0
    } else {
        document.querySelector('.main__view__nav').style.paddingTop = "9px"
    }
})

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authourization: "Bearer 9fc926bf4c3aa7d01b582ea2d607b5143af03663"
    },
    body: JSON.stringify({
      query: `
      {
        repositoryOwner(login: "ireade") {
          avatarUrl
          login
          id
          url
          ... on User {
            id
            email
            bio
            bioHTML
            anyPinnableItems
            company
            companyHTML
            followers {
              totalCount
            }
            following {
              totalCount
            }
            name
            location
            twitterUsername
            url
            websiteUrl
          }
          repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
              id
              description
              updatedAt
              stargazerCount
              descriptionHTML
              forkCount
              primaryLanguage {
                id
                name
                color
              }
              homepageUrl
              isFork
              isPrivate
              name
              owner {
                login
              }
              licenseInfo {
                name
              }
            }
          }
        }
      }  
      `
    })
}
    // 9fc926bf4c3aa7d01b582ea2d607b5143af03663
fetch('https://api.github.com/graphql', options)
.then(res => res.json())
.then(data => console.log(data))