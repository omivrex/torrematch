const resultWrapper = $('#resultWrapper')[0]

function renderData(data) {
  resultWrapper.innerHTML += '<div class="devDet">'
          +'<img src="'+data.developerImgTumb.thumb2+'" alt="" class="thumb">'
          +'<span class="name"> <a href="">'+ data.names[1] +'</a></span>'
          +'<li class = "details"><span>Strengths: <span><span>'+ data.stats[1].strengths +'<span></li>'
          +'<li class = "details"><span>Interests: <span><span>'+ data.stats[1].interests +'<span></li>'
          +'<li class = "details"><span>Education: <span><span>'+ data.stats[1].education +'<span></li>'
          +'<li class = "details"><span>Projects: <span><span>'+ data.stats[1].projects +'<span></li>'
        +'</div>'
        +'<div class="devDet">'
          +'<img src="'+data.developerImgTumb.thumb1+'" alt="" class="thumb">'
          +'<span class="name"><a href="">'+ data.names[0] +'</a></span>'
          +'<li class = "details"><span>Strengths: <span><span>'+ data.stats[0].strengths +'<span></li>'
          +'<li class = "details"><span>Interests: <span><span>'+ data.stats[0].interests +'<span></li>'
          +'<li class = "details"><span>Education: <span><span>'+ data.stats[0].education +'<span></li>'
          +'<li class = "details"><span>Projects: <span><span>'+ data.stats[0].projects +'<span></li>'
        +'</div>'
        +'<div class="statBox">'
          +'<div class="dataBox">'
            +'<span class="dataHeader">Matches:</span>'
            +'<span class="matchTags"> Interest: '+ data.matchResult.interestRes+'%</span>'
            +'<span class="matchTags"> Language: '+ data.matchResult.languageRes+'%</span>'
            +'<span class="matchTags"> Location: '+ data.matchResult.locationRes.toString().toUpperCase()+'</span>'
          +'</div>'
          +'<div class="dataBox">'
            +'<span class="dataHeader">Comparisim:</span>'

          +'</div>'
        +'</div>'

        resultWrapper.style.display = 'block'
}
