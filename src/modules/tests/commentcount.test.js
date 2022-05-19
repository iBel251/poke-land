import countComments from '../comment-count.js';

describe('Pass in Comments', () => {
  test('Pass in 7 comments', () => {
    const comments = [
      {
        item_id: 'pikachu',
        username: 'user1',
        comment: 'Great character',
      },
      {
        item_id: 'bulbasaur',
        username: 'user2',
        comment: 'awful character',
      },
      {
        item_id: 'venusaur',
        username: 'user3',
        comment: 'nice character',
      },
      {
        item_id: 'butterfree',
        username: 'user4',
        comment: 'weak character',
      },
      {
        item_id: 'spearow',
        username: 'user5',
        comment: 'strong character',
      },
      {
        item_id: 'pidgeot',
        username: 'user6',
        comment: 'strong character',
      },
    ];
    expect(countComments(comments)).toBe(6);
  });

  test('Pass in 2 comment', () => {
    const comments = [
      {
        item_id: 'pidgeot',
        username: 'internettroll001',
        comment: "Can't wait for pidgeot to kill pikachu",
      },
      {
        item_id: 'spearow',
        username: 'internettroll001',
        comment: "Can't wait for pidgeot to kill pikachu",
      },
    ];
    expect(countComments(comments)).toBe(2);
  });

  test('Pass in 0 comment', () => {
    const comments = [];
    expect(countComments(comments)).toBe(0);
  });
});
