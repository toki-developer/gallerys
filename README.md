# gallerys

自動写真配置機能

画像が正方形の枠の中で適切に配置されます


#　特徴

ー正方形の中で写真が自動配置


ー写真の枚数によって写真の配置変更


ー写真のアスペクト比によって写真の配置変更


ー5枚目以降の写真は隠れる


ー写真が崩れないようにトリミング


ー写真間の幅の大きさ変更可


# 使い方

CSS及びJavaScriptの読み込み

```

<link rel="stylesheet" href="gallery.css">
<script src="gallery.js"></script>

```


HTMLで画像を挿入

```
<div class="js-gallery">
     <img src="#">
     <img src="#">
     <img src="#">
</div>

<div class="js-gallery">
     <div&gt;&lt;img src="#"></div>
     <div&gt;&lt;img src="#"></div>
     <div&gt;&lt;img src="#"></div>
</div>

<div class="js-gallery">
     <div><a href="#"><img src="#"></a></div>
     <div><a href="#"><img src="#"></a></div>
     <div><a href="#"><img src="#"></a></div>
</div>

```

imgタグをdivタグやaタグで囲うこともできます。　

js-galleryは一度に何度でも使うことができます。

※「＃」には表示したい画像を入れてください。


JavaScript

```
document.addEventListener('DOMContentLoaded',function(){
    new Gallery('.js-gallery',{
        photopadding: '3px'
    });
});

```

photopaddingの値を変更すると画像同士の間の幅を変更することができます。

引数のjs-galleryを変更すると、HTMLのクラス名を変更できます。


