//处理number 返回万/亿的数字
export function getCount(num){
    if (num<10000) {
        return num
    }else if(Math.floor(num/10000) <10000){
        return Math.floor(num/1000)/10 + '万'
    }else{
        return Math.floor(num/100000000)/10 + '亿'
    }
}

//返回给定大小的图片url
export function getSizeImage(url,size){
    return url + `?param=${size}y${size}`
}

//获取播放地址
export function getPlayUrl(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
  }

  //给定毫秒单位的时间,返回'mm:ss'格式的时间
export function formatMinuteSecond(time) {
    const t = parseInt(time)
    const second = t % 60
    const minute = (t - second)/60
    return `${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`
}

//根据给定范围,生成与之前数字不同的随机整数
export function getRandomNumber(range,num) {
    let newNumber = parseInt(Math.random() * range)
    while (newNumber === num) {
        newNumber = parseInt(Math.random() * range)
    }
    return newNumber
}

// 将歌词处理成数组结构
/* 
    '[01:31.65][00:17.13]每次走过这间咖啡屋
    [01:34.64][00:19.99]忍不住慢下了脚步
    [01:38.88][00:24.15]你我初次相识在这里
    [01:42.07][00:27.28]揭开了相悦的序幕
    [01:46.33][00:31.76]今天你不再是座上客
    [01:49.52][00:34.82]我也就恢复了孤独
    [01:53.91][00:39.30]不知什么缘故使我俩
    [01:56.87][00:42.24]由情侣变成了陌路
    [02:00.77][00:46.11]芳香的咖啡飘满小屋
    [02:04.27][00:49.72]对你的情感依然如故
    [02:08.13][00:53.45]不知道何时再续前缘
    [02:11.71][00:57.12]让我把思念向你倾诉
    [02:18.11][01:03.43]我又走过这间咖啡屋
    [02:21.19][01:06.52]忍不住慢下了脚步
    [02:25.60][01:10.96]屋里再也不见你和我
    [02:28.65][01:13.91]美丽的往事已模糊'
*/
export function parseLyric(lyricString) {
    const arr = lyricString.split('\n')
    const lyrics = []
    for (let line of arr) {
        if (!line) continue
        const parseExp = new RegExp('\\[(\\d{2}):(\\d{2}).(\\d{2,3})\\]','g')
        const result1 = parseExp.exec(line)
        if (!result1) continue;
        // 两端歌词时相同时,获取的数据有两个时间 '[01:31.65][00:17.13]每次走过这间咖啡屋'
        const result2 = parseExp.exec(line)
        let time = formatTime(result1)
        const content = line.replace(parseExp,'')
        //如果内容为空的话 不用展示 
        if(!content) continue
        const lineObj = {
            time,
            content
        }
        lyrics.push(lineObj)
        // console.log('判断result2是否为空',!result2)
        if (result2) {
            time = formatTime(result2)
            const lineObj2 = {...lineObj}
            lineObj2.time = time
            
            lyrics.push(lineObj2)
        }
        lyrics.sort((a,b)=>{
           return a.time - b.time
        })

    }
    // 处理正则表达式exec()调用后的结果
    function formatTime(arr){
        const time1 = arr[1] *60 *1000
        const time2 = arr[2] *1000
        const time3 = arr[3].length === 2 ? arr[3]*10 : arr[3]*1
        const time  = time1 + time2 + time3
        return time
    }
    
    return lyrics
    
}