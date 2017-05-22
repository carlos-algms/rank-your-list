// TODO is only working for even lists
/* eslint-disable */
export default function Ranker(listArgs) {
  const members = listArgs;

  const lstMember = [];
  const parent = [];
  const equal = [];
  const rec = [];

  let cmp1;
  let cmp2;
  let head1;
  let head2;
  let nrec;

  let numQuestion;
  let totalSize;
  let finishSize;
  let finishFlag;

  initList();


  return {
    sortList,
  };


  // //////////////////////////////////////////


  function initList() {
    let n = 0;
    let mid;
    let i;

    //  ????????(Sequence to be sorted)
    lstMember[n] = [];
    for (i = 0; i < members.length; i += 1) {
      lstMember[n][i] = i;
    }

    parent[n] = -1;
    totalSize = 0;
    n += 1;

    for (i = 0; i < lstMember.length; i += 1) {
      //  ????2????2????(???)
      //  ????????lstMember???????(???)
      if (lstMember[i].length >= 2) {
        mid = Math.ceil(lstMember[i].length / 2);
        lstMember[n] = [];
        lstMember[n] = lstMember[i].slice(0, mid);
        totalSize += lstMember[n].length;
        parent[n] = i;
        n += 1;
        lstMember[n] = [];
        lstMember[n] = lstMember[i].slice(mid, lstMember[i].length);
        totalSize += lstMember[n].length;
        parent[n] = i;
        n += 1;
      }
    }

    //  ?????(Storage array)
    for (i = 0; i < members.length; i += 1) {
      rec[i] = 0;
    }

    nrec = 0;

    // ???????????????(???)
    // ??:???????(???)
    //  ? :???????(???)
    for (i = 0; i <= members.length; i += 1) {
      equal[i] = -1;
    }

    cmp1 = lstMember.length - 2;
    cmp2 = lstMember.length - 1;
    head1 = 0;
    head2 = 0;
    numQuestion = 1;
    finishSize = 0;
    finishFlag = 0;
  }


  /**
   *
   * @param {Number} flag -1 the left, 0 Draws, 1 the Right
   */
  function sortList(flag) {
    let i;
    let str;

    // rec???(Save the rec)
    if (flag < 0) {
      rec[nrec] = lstMember[cmp1][head1];
      head1 += 1;
      nrec += 1;
      finishSize += 1;

      while (equal[rec[nrec - 1]] !== -1) {
        rec[nrec] = lstMember[cmp1][head1];
        head1 += 1;
        nrec += 1;
        finishSize += 1;
      }
    } else if (flag > 0) {
      rec[nrec] = lstMember[cmp2][head2];
      head2 += 1;
      nrec += 1;
      finishSize += 1;

      while (equal[rec[nrec - 1]] !== -1) {
        rec[nrec] = lstMember[cmp2][head2];
        head2 += 1;
        nrec += 1;
        finishSize += 1;
      }
    } else {
      rec[nrec] = lstMember[cmp1][head1];
      head1 += 1;
      nrec += 1;
      finishSize += 1;

      while (equal[rec[nrec - 1]] !== -1) {
        rec[nrec] = lstMember[cmp1][head1];
        head1 += 1;
        nrec += 1;
        finishSize += 1;
      }

      equal[rec[nrec - 1]] = lstMember[cmp2][head2];
      rec[nrec] = lstMember[cmp2][head2];
      head2 += 1;
      nrec += 1;
      finishSize += 1;

      while (equal[rec[nrec - 1]] !== -1) {
        rec[nrec] = lstMember[cmp2][head2];
        head2 += 1;
        nrec += 1;
        finishSize += 1;
      }
    }

    // ?????????????????
    // (Processing after it has finished scanning the list of one)
    if (head1 < lstMember[cmp1].length && head2 === lstMember[cmp2].length) {
      // ???cmp2???? - ???cmp1???????
      // (Cmp2 list is scanned - copy the rest of the list cmp1)
      while (head1 < lstMember[cmp1].length) {
        rec[nrec] = lstMember[cmp1][head1];
        head1 += 1;
        nrec += 1;
        finishSize += 1;
      }
    } else if (head1 === lstMember[cmp1].length && head2 < lstMember[cmp2].length) {
      // ???cmp1???? - ???cmp2???????
      // (Cmp1 list is scanned - copy the rest of the list cmp2)
      while (head2 < lstMember[cmp2].length) {
        rec[nrec] = lstMember[cmp2][head2];
        head2 += 1;
        nrec += 1;
        finishSize += 1;
      }
    }

    // ?????????????????
    // (If you reach the end of the list of both)
    // ?????????(I want to update the parent list)
    if (head1 === lstMember[cmp1].length && head2 === lstMember[cmp2].length) {
      for (i = 0; i < lstMember[cmp1].length + lstMember[cmp2].length; i += 1) {
        lstMember[parent[cmp1]][i] = rec[i];
      }

      lstMember.pop();
      lstMember.pop();
      cmp1 -= 2;
      cmp2 -= 2;
      head1 = 0;
      head2 = 0;

      // ??????????rec????
      // (Initialize the rec before you make a new comparison)
      if (head1 === 0 && head2 === 0) {
        for (i = 0; i < members.length; i += 1) {
          rec[i] = 0;
        }
        nrec = 0;
      }
    }

    if (cmp1 < 0) {
      // percent = Math.floor((finishSize * 100) / totalSize)
      showResult();
      finishFlag = 1;
    } else {
      showImage();
    }
  }

// ?????+++++++++++++++++++++++++++++++++++++++++++++++
// (View Results)+++++++++++++++++++++++++++++++++++++++++++
  function showResult() {
    /* eslint-disable prefer-template */
    let ranking = 1;
    let sameRank = 1;
    let str = '';
    let i;

    str += '<table style="width:200px; font-size:12px; line-height:120%; margin-left:auto; margin-right:auto; border:1px solid #000; border-collapse:collapse" align="center">';
    str += '<tr><td style="color:#ffffff; background-color:#000; text-align:center;">Rank</td><td style="color:#ffffff; background-color:#000; text-align:center;">Game</td></tr>';

    for (i = 0; i < members.length; i += 1) {
      str += '<tr><td style="border:1px solid #000; text-align:right; padding-right:5px;">' + ranking + '</td><td style="border:1px solid #000; padding-left:5px;">' + members[lstMember[0][i]] + '</td></tr>';
      if (i < members.length - 1) {
        if (equal[lstMember[0][i]] === lstMember[0][i + 1]) {
          sameRank += 1;
        } else {
          ranking += sameRank;
          sameRank = 1;
        }
      }
    }
    str += '</table>';

    console.info(str);
    /* eslint-enable */
  }

// ????2??????+++++++++++++++++++++++++++++++++++
// (Display of two elements to be compared)+++++++++++++++++
  function showImage() {
    /* eslint-disable prefer-template */
    const str0 = 'Battle No.' + numQuestion + '<br>' + Math.floor((finishSize * 100) / totalSize) + '% sorted.';
    const str1 = '' + toNameFace(lstMember[cmp1][head1]);
    const str2 = '' + toNameFace(lstMember[cmp2][head2]);

    // document.getElementById('battleNumber').innerHTML = str0;
    // document.getElementById('leftField').innerHTML = str1;
    // document.getElementById('rightField').innerHTML = str2;
    debugger;
    numQuestion += 1;
    console.log(str0, str1, str2);
    /* eslint-enable */
  }

// ?????(???)???+++++++++++++++++++++++++++++++
// Convert name to (emoticons) a number+++++++++++++++++++++

  function toNameFace(n) {
    return members[n];
  }
}
