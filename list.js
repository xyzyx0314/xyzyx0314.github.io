  // 获取导航菜单的父元素
  const menuList = document.querySelector('.m-lt-list');
  
  // 创建导航菜单的标题
  var div = document.createElement('div');
  div.classList.add('m-lt-title');
  div.innerText = '导航';

  menuList.appendChild(div);

  // 定义导航菜单项的数据
  var menuItems = [
    { name: ' 主页 ', icon: 'img\\home.svg', action: 'loadPage(\'home\')' },
    { name: ' 笔记 ', icon: 'img\\write.svg', action: 'loadPage(\'note\')' },
    { name: ' 联系 ', icon: 'img\\connect.svg', action: 'loadPage(\'connect\')' },
    { name: ' 投喂 ', icon: 'img\\reward.svg', action: 'loadPage(\'reward\')' },
  ];

  // 为每个菜单项创建一个元素
  menuItems.forEach(function(item) {
    var menuItem = document.createElement('div');
    menuItem.className = 'm-lt-card';
    menuItem.onclick = function() { eval(item.action); };

    var img = document.createElement('img');
    img.src = item.icon;
    img.className = 'svgshadow';

    menuItem.appendChild(img);
    menuItem.appendChild(document.createTextNode(item.name));

    menuList.appendChild(menuItem);
  });

  // 创建分组菜单的标题
  var div2 = document.createElement('div');
  div2.classList.add('m-lt-title');
  div2.innerText = '分组';

  menuList.appendChild(div2);
  
  // 分组菜单的数据
  var menuItems = [
    { id: 'menuWeb', img: 'classify.svg', title: ' 更新日志', imgId: 'lt-img1' },
    { id: 'menuNote', img: 'note.svg', title: ' ACM', imgId: 'lt-img2' },
    { id: 'menuProject', img: 'boardmenu.svg', title: ' 实验', imgId: 'lt-img4' },
    { id: 'menuDaily', img: 'daily.svg', title: ' 日记', imgId: 'lt-img4' },
    { id: 'menuTwo', img: 'friend.svg', title: ' 友链', imgId: 'lt-img6' },
  ];

  // 创建分组菜单
  menuItems.forEach(item => {
    var menu = document.createElement('div');
    menu.className = 'm-lt-menu';

    var card = document.createElement('div');
    card.className = 'm-lt-card collapsed';
    card.dataset.bsToggle = 'collapse';
    card.setAttribute('href', `#${item.id}`);
    card.setAttribute('onclick', `toggleImage('${item.imgId}')`);

    var img = document.createElement('img');
    img.src = `img\\${item.img}`;
    img.className = 'svgshadow';

    var title = document.createTextNode(item.title);

    var h = document.createElement('h');
    h.className = 'open';

    var img2 = document.createElement('img');
    img2.src = 'img\\left.svg';
    img2.className = 'svgshadow';
    img2.id = item.imgId;

    h.appendChild(img2);
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(h);

    var collapse = document.createElement('div');
    collapse.id = item.id;
    collapse.className = 'collapse';
    collapse.dataset.bsParent = '#accordion';

    menu.appendChild(card);
    menu.appendChild(collapse);

    menuList.appendChild(menu);
  });

  //底部留白
  var br = document.createElement('br');
  menuList.appendChild(br);

  //分组菜单内
  function createMenuItems(menuId, items) {
    var menu = document.querySelector(menuId);
    items.forEach(item => {
      var card = document.createElement('div');
      card.className = 'm-lt-card';
      card.onclick = function() { loadBlog(item.url) };
      
      var img = document.createElement('img');
      img.src = `img\\${item.img}.svg`;
      img.className = 'svgshadow';
      
      var textNode = document.createTextNode(` ${item.text}`);
      
      card.appendChild(img);
      card.appendChild(textNode);
      menu.appendChild(card);
    });
  }

  // 使用示例
  createMenuItems('#menuWeb', [
    {img: 'text', url: 'blog/week1', text: 'web week 1' },
    {img: 'text', url: 'blog/week2', text: 'web week 2' },
    {img: 'text', url: 'blog/week3', text: 'web week 3' },
    {img: 'text', url: 'blog/week4', text: 'web week 4' },
    {img: 'text', url: 'blog/week5', text: 'Change 5' },
    {img: 'text', url: 'blog/week6', text: 'Change 6' },
    {img: 'text', url: 'blog/week7', text: 'Change 7' },
  ]);

  createMenuItems('#menuNote', [
    {img: 'answer', url: 'acm/cf1820', text: 'Codeforces Round 866 (Div. 2)' },
    {img: 'answer', url: 'acm/ABC301', text: 'AtCoder ABC 301' },
    {img: 'answer', url: 'acm/JT20230717', text: '大一Tarjan' },
    {img: 'calendar', url: 'acm/XL20230621', text: '2023年6月21日' },
    {img: 'calendar', url: 'acm/XL20230622', text: '2023年6月22日' },
    {img: 'calendar', url: 'acm/XL20230623', text: '2023年6月23日 组队+补题' },
    {img: 'board', url: 'acm/board_Graph', text: '图论' },
  ]);

  createMenuItems('#menuProject', [
    {img: 'text', url: 'project/project1', text: '远程桌面&内网穿透' },
  ]);

  createMenuItems('#menuDaily', [
    {img: 'daily', url: '404', text: '第一篇' },
  ]);

  createMenuItems('#menuTwo', [
    {img: 'AD', url: 'reward', text: '广告位招租' },
  ]);