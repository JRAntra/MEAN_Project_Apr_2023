import { Injectable } from '@angular/core';

interface News {
  avatar: string;
  publisherName: string;
  content: {
    imageUrl?: string;
    videoUrl?: string;
    textUrl?: string;
  };
  comments: Comment[];
  likedIdList: {
    userId: string;
  }[];
}

interface Comment {
  avatar: string;
  publisherName: string;
  content: {
    imageUrl?: string;
    videoUrl?: string;
    textUrl?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private newsFeed: News[] = [
    {
      avatar: 'https://pbs.twimg.com/profile_images/1575486829356122115/K9zDF6YG_400x400.jpg',
      publisherName: 'John Doe',
      content: {
        imageUrl: 'https://pbs.twimg.com/media/FxSBLpMWYAIKllo?format=jpg&name=medium',
        textUrl: 'mood actually'
      },
      comments: [
        {
          avatar: 'comment-avatar-url',
          publisherName: 'Jane Smith',
          content: {
            textUrl: 'love it'
          }
        }
      ],
      likedIdList: [
        {
          userId: 'user-id'
        },
        {
          userId: 'user-id'
        }
      ]
    },
    {
      avatar: 'https://pbs.twimg.com/media/FwBdeaEWcAIsBI3?format=jpg&name=900x900',
      publisherName: 'John Doe',
      content: {
        imageUrl: 'https://pbs.twimg.com/media/FwVlJjxWcAIC18H?format=jpg&name=medium',
        // videoUrl: 'video-url',
        textUrl: 'find me'
      },
      comments: [
        {
          avatar: 'comment-avatar-url',
          publisherName: 'Jane Smith',
          content: {
            textUrl: 'love it'
          }
        },
        {
          avatar: 'https://pbs.twimg.com/media/Fv0CDQSWAAAWsa8?format=jpg&name=small',
          publisherName: 'Jane Smith',
          content: {
            textUrl: 'love it',
            // imageUrl: 'image-url',
            // videoUrl: 'video-url',
          }
        },
        {
          avatar: 'https://pbs.twimg.com/media/Fv0CDQSWAAAWsa8?format=jpg&name=small',
          publisherName: 'Jane Smith',
          content: {
            textUrl: 'love it',
            // imageUrl: 'image-url',
            // videoUrl: 'video-url',
          }
        }
      ],
      likedIdList: [
        {
          userId: 'user-id'
        },
        {
          userId: 'user-id'
        },
        {
          userId: 'user-id'
        },
        {
          userId: 'user-id'
        }
      ]
    },
    {
      avatar: 'https://pbs.twimg.com/media/Fv3dM0_WABsYiLy?format=jpg&name=medium',
      publisherName: 'Stacy Jane',
      content: {
        imageUrl: 'https://pbs.twimg.com/media/Fv7PwNoWYAI6pcD?format=jpg&name=medium',
        // videoUrl: 'video-url',
        textUrl: 'selfie'
      },
      comments: [
        {
          avatar: 'https://pbs.twimg.com/media/Fv0CDQSWAAAWsa8?format=jpg&name=small',
          publisherName: 'Jane Smith',
          content: {
            textUrl: 'love it',
            // imageUrl: 'image-url',
            // videoUrl: 'video-url',
          }
        }
      ],
      likedIdList: [
        {
          userId: 'user-id'
        },
        {
          userId: 'user-id'
        },
        {
          userId: 'user-id'
        }
      ]
    }
  ];

  constructor() { }

  getNewsFeed(): News[] {
    return this.newsFeed;
  }
}
