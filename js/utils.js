export const query = `
    {
        repositoryOwner(login: "coachlivinglegend") {
            avatarUrl
            login
            url
            ... on User {
                bio
                company
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
                starredRepositories {
                    totalCount
                }
            }
            repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
                totalCount
                nodes {
                    description
                    updatedAt
                    stargazerCount
                    descriptionHTML
                    forkCount
                    primaryLanguage {
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
                    url
                    isArchived
                }
            }
        }
    }
`